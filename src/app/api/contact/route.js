/**
 * Contact form API – forwards submissions to Google Sheets via Google Apps Script.
 *
 * Set GOOGLE_SCRIPT_URL in .env.local to your Apps Script Web App URL (Deploy > New deployment > Web app).
 *
 * Example Apps Script (paste in script.google.com, bind to a spreadsheet, deploy as Web app):
 *
 *   function doPost(e) {
 *     try {
 *       var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *       var data = JSON.parse(e.postData.contents);
 *       sheet.appendRow([
 *         new Date(),
 *         data.name || '',
 *         data.email || '',
 *         data.phone || '',
 *         data.type || '',
 *         data.message || ''
 *       ]);
 *       return ContentService.createTextOutput(JSON.stringify({ ok: true }))
 *         .setMimeType(ContentService.MimeType.JSON);
 *     } catch (err) {
 *       return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
 *         .setMimeType(ContentService.MimeType.JSON);
 *     }
 *   }
 *
 * Sheet columns: Timestamp | Name | Email | Phone | Project Type | Message | Source | Status | Tags | Notes
 */

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

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

  const { name, email, phone, message, type } = body;
  const payload = {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: phone ? String(phone).trim() : "",
    type: type ? String(type).trim() : "Website",
    message: String(message || "").trim(),
    source: "Website",
    status: "New",
    tags: "Contact Form",
    notes: "",
  };

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    if (!res.ok) {
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
