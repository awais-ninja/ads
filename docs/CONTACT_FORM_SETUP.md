# Contact form setup

The site has two forms (`ContactForm`, `FreeWebsiteAuditForm`) that both POST to
`/api/contact`. The API route validates the input, verifies a Cloudflare
Turnstile token, then forwards the payload to a Google Apps Script Web App.
The Apps Script appends a row to a Google Sheet **and** emails you on every
submission.

You need to do three things, then add four env vars.

---

## 1. Google Sheet + Apps Script (data + email notification)

1. Create a new Google Sheet (e.g. "ADS – Website enquiries").
2. `Extensions ▸ Apps Script` to open the script editor.
3. Replace the default code with the snippet below and set `NOTIFICATION_EMAIL`
   to the address you want to receive notifications at.

   ```javascript
   const SPREADSHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE';
   const NOTIFICATION_EMAIL = 'info@awaisdigitalservices.co.uk';

   function doPost(e) {
     try {
       const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
       const data = JSON.parse(e.postData.contents);

       if (sheet.getLastRow() === 0) {
         sheet.appendRow([
           'Timestamp', 'Name', 'Email', 'Phone', 'Project Type',
           'Message', 'Source', 'Status', 'Tags', 'Notes', 'IP', 'User-Agent'
         ]);
       }

       sheet.appendRow([
         new Date(),
         data.name || '',
         data.email || '',
         data.phone || '',
         data.type || '',
         data.message || '',
         data.source || 'Website',
         data.status || 'New',
         data.tags || '',
         data.notes || '',
         data.ip || '',
         data.userAgent || ''
       ]);

       const subject = 'New enquiry: ' + (data.type || 'Website') +
         ' – ' + (data.name || 'No name');
       const body =
         'You received a new submission from awaisdigitalservices.co.uk\n\n' +
         'Name:    ' + (data.name || '') + '\n' +
         'Email:   ' + (data.email || '') + '\n' +
         'Phone:   ' + (data.phone || '') + '\n' +
         'Type:    ' + (data.type || '') + '\n' +
         'Source:  ' + (data.source || 'Website') + '\n\n' +
         'Message:\n' + (data.message || '') + '\n\n' +
         '— Submitted: ' + new Date().toString();

       MailApp.sendEmail({
         to: NOTIFICATION_EMAIL,
         subject: subject,
         body: body,
         replyTo: data.email || NOTIFICATION_EMAIL,
         name: 'Awais Digital Services Website'
       });

       return ContentService
         .createTextOutput(JSON.stringify({ ok: true }))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (err) {
       return ContentService
         .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }

   function doGet() {
     return ContentService
       .createTextOutput(JSON.stringify({ ok: true, status: 'alive' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

4. Click **Run** once on `doPost` (or any function) to grant
   `SpreadsheetApp` and `MailApp` permissions. Approve the Google account
   prompts (you may need to click "Advanced ▸ Go to project (unsafe)" for
   personal scripts).
5. **Deploy ▸ New deployment ▸ Web app**:
   - Description: `Contact form endpoint`
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the deployment URL (ends in `/exec`). This is your
   `GOOGLE_SCRIPT_URL`.

> Quota: `MailApp.sendEmail` allows 100/day on free Google accounts and
> 1500/day on Workspace accounts — plenty for a contact form.

If you change the script later you must deploy a **new version**
(`Deploy ▸ Manage deployments ▸ pencil icon ▸ Version: New version`).

---

## 2. Cloudflare Turnstile (captcha)

1. Go to https://dash.cloudflare.com → **Turnstile**.
2. Click **Add site** with these settings:
   - Widget mode: **Managed**
   - Hostnames: add `awaisdigitalservices.co.uk`,
     `www.awaisdigitalservices.co.uk`, and `localhost` (for dev).
3. Copy the **Site Key** and **Secret Key**.

The site key goes in `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and is exposed to the
browser. The secret key goes in `TURNSTILE_SECRET_KEY` and stays server-side.

If both are left empty the forms still work — Turnstile is simply skipped.

---

## 3. Environment variables

### Local (`.env.local`)

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAA...
TURNSTILE_SECRET_KEY=0x4AAAA...
```

Restart `npm run dev` after editing `.env.local` — Next.js only reads it on
boot.

### Production (Vercel)

In the Vercel dashboard → Project → **Settings ▸ Environment Variables**, add
the same three variables for the `Production` (and `Preview` if you want)
environments, then redeploy.

---

## 4. Verifying the flow

1. Open `/contact` (or any page with the hero contact form / audit form).
2. Fill it in, complete the Turnstile checkbox, submit.
3. You should see **"Thank you for your message…"**.
4. The Google Sheet gets a new row.
5. Your `NOTIFICATION_EMAIL` inbox gets the alert (check spam the first time;
   sender will be your Google account).

If submission fails, check the browser network tab for the `/api/contact`
response — the API now returns specific errors:

- `503 Form submission is not configured.` → `GOOGLE_SCRIPT_URL` missing.
- `400 Please complete the security check…` → Turnstile not solved.
- `400 Security check failed…` → Turnstile rejected the token (wrong domain
  in the widget config or wrong secret).
- `502 Failed to save submission…` → Apps Script returned an error (open the
  Apps Script editor → **Executions** to see the stack trace).
