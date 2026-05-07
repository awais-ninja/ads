/**
 * Contact form API – validates input, verifies Cloudflare Turnstile,
 * and forwards submissions to Google Sheets via Google Apps Script.
 * The Apps Script is responsible for appending the row AND emailing
 * the site owner on every submission.
 *
 * Required env vars:
 *   GOOGLE_SCRIPT_URL          - Apps Script Web App /exec URL
 *   TURNSTILE_SECRET_KEY       - Cloudflare Turnstile secret (server-side)
 *   NEXT_PUBLIC_TURNSTILE_SITE_KEY - Cloudflare Turnstile site key (client-side)
 *
 * --------------------------------------------------------------
 *  Apps Script template (paste in script.google.com, bind to a sheet,
 *  Deploy > New deployment > Web app, "Execute as: Me",
 *  "Who has access: Anyone").
 *
 *  Set NOTIFICATION_EMAIL to where you want notifications delivered.
 * --------------------------------------------------------------
 *
 *   const SPREADSHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE';
 *   const NOTIFICATION_EMAIL = 'info@awaisdigitalservices.co.uk';
 *
 *   function doPost(e) {
 *     try {
 *       const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
 *       const data = JSON.parse(e.postData.contents);
 *
 *       // First-run: write header row if the sheet is empty.
 *       if (sheet.getLastRow() === 0) {
 *         sheet.appendRow([
 *           'Timestamp', 'Name', 'Email', 'Phone', 'Project Type',
 *           'Message', 'Source', 'Status', 'Tags', 'Notes', 'IP', 'User-Agent'
 *         ]);
 *       }
 *
 *       sheet.appendRow([
 *         new Date(),
 *         data.name || '',
 *         data.email || '',
 *         data.phone || '',
 *         data.type || '',
 *         data.message || '',
 *         data.source || 'Website',
 *         data.status || 'New',
 *         data.tags || '',
 *         data.notes || '',
 *         data.ip || '',
 *         data.userAgent || ''
 *       ]);
 *
 *       const subject = 'New enquiry: ' + (data.type || 'Website') +
 *         ' – ' + (data.name || 'No name');
 *       const body =
 *         'You received a new submission from awaisdigitalservices.co.uk\n\n' +
 *         'Name:    ' + (data.name || '') + '\n' +
 *         'Email:   ' + (data.email || '') + '\n' +
 *         'Phone:   ' + (data.phone || '') + '\n' +
 *         'Type:    ' + (data.type || '') + '\n' +
 *         'Source:  ' + (data.source || 'Website') + '\n\n' +
 *         'Message:\n' + (data.message || '') + '\n\n' +
 *         '— Submitted: ' + new Date().toString();
 *
 *       MailApp.sendEmail({
 *         to: NOTIFICATION_EMAIL,
 *         subject: subject,
 *         body: body,
 *         replyTo: data.email || NOTIFICATION_EMAIL,
 *         name: 'Awais Digital Services Website'
 *       });
 *
 *       return ContentService
 *         .createTextOutput(JSON.stringify({ ok: true }))
 *         .setMimeType(ContentService.MimeType.JSON);
 *     } catch (err) {
 *       return ContentService
 *         .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
 *         .setMimeType(ContentService.MimeType.JSON);
 *     }
 *   }
 *
 *   function doGet() {
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ ok: true, status: 'alive' }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 *
 * --------------------------------------------------------------
 *  After saving the script, click "Run" once to grant the
 *  SpreadsheetApp + MailApp permissions, then deploy.
 * --------------------------------------------------------------
 */

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+\-()]{10,20}$/;
const NAME_MIN = 2;
const NAME_MAX = 100;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 2000;

function validate(body) {
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < NAME_MIN) return "Please enter your full name (at least 2 characters).";
  if (name.length > NAME_MAX) return "Name is too long.";
  if (!email) return "Email is required.";
  if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address.";
  if (email.length > 254) return "Email is too long.";
  if (phone && !PHONE_REGEX.test(phone)) return "Please enter a valid phone number.";
  if (message.length < MESSAGE_MIN) return "Please write at least a short message (10+ characters).";
  if (message.length > MESSAGE_MAX) return "Message is too long.";
  return null;
}

async function verifyTurnstile(token, ip) {
  // Skip entirely outside production (dev / preview) so local testing isn't blocked.
  if (process.env.NODE_ENV !== "production") {
    return { ok: true, skipped: true };
  }
  if (!TURNSTILE_SECRET_KEY) {
    // No secret configured -> treat as disabled (don't block submissions).
    return { ok: true, skipped: true };
  }
  if (!token) {
    return { ok: false, reason: "Please complete the security check." };
  }

  try {
    const form = new URLSearchParams();
    form.append("secret", TURNSTILE_SECRET_KEY);
    form.append("response", token);
    if (ip) form.append("remoteip", ip);

    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
    const data = await res.json();
    if (data && data.success) return { ok: true };
    return { ok: false, reason: "Security check failed. Please try again." };
  } catch (err) {
    console.error("Turnstile verify error:", err);
    return { ok: false, reason: "Could not verify the security check. Please try again." };
  }
}

function getClientIp(request) {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    ""
  );
}

export async function POST(request) {
  if (!GOOGLE_SCRIPT_URL) {
    return Response.json(
      { error: "Form submission is not configured." },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const validationError = validate(body);
  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 });
  }

  const ip = getClientIp(request);

  const turnstile = await verifyTurnstile(body.turnstileToken, ip);
  if (!turnstile.ok) {
    return Response.json({ error: turnstile.reason }, { status: 400 });
  }

  const { name, email, phone, message, type } = body;
  const payload = {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: phone ? String(phone).trim() : "",
    type: type ? String(type).trim() : "Website",
    message: String(message || "").trim(),
    source: body.source ? String(body.source).trim() : "Website",
    status: "New",
    tags: body.tags ? String(body.tags).trim() : "Contact Form",
    notes: "",
    ip,
    userAgent: request.headers.get("user-agent") || "",
  };

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const text = await res.text();
    if (!res.ok) {
      console.error("Apps Script non-2xx:", res.status, text);
      return Response.json(
        { error: "Failed to save submission. Please try again." },
        { status: 502 }
      );
    }

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = { ok: true };
    }

    if (result && result.ok === false) {
      console.error("Apps Script returned error:", result.error);
      return Response.json(
        { error: "Failed to save submission. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
