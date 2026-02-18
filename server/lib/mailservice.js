const nodemailer = require("nodemailer");

/**
 * Send contact form email
 * @param {Object} data
 * @returns {Promise<void>}
 */
async function sendContactMail(data = {}) {
  const {
    fname = "",
    email = "",
    phone = "",
    subject = "",
    message = "",
    formUrl = "https://b3net.com/contact/",
    ip = "",
  } = data;

  const port = Number(process.env.SMTP_PORT || 465);
  const secure = port === 465;

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("SMTP env missing. Check SMTP_HOST/SMTP_USER/SMTP_PASS in .env");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Shared hosting SMTP sometimes needs this
    tls: { rejectUnauthorized: false },
  });

  const html = `
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>B3NET</title>
    </head>
    <body style="font-family: Arial, Helvetica, sans-serif; color:#000;">
      <div style="margin:25px 0;font-size:20px;text-align:center;">
        Contact form submitted by <b>${escapeHtml(fname)}</b>
      </div>

      <table width="100%" border="1" bordercolor="#ffc326" cellspacing="0" cellpadding="10"
             style="font-size:15px;border-collapse:collapse;">
        <tbody>
          <tr>
            <td colspan="2" align="center" height="100" style="background:#fff;">
              <img alt="logo" src="https://b3net.com/wp-content/themes/b3net/assets/images/logo.png" style="max-width:220px;">
            </td>
          </tr>

          <tr>
            <td colspan="2" align="center" style="font-size:20px;background:#555;color:#fff;">
              Submitted information
            </td>
          </tr>

          <tr><td width="50%">Full Name:</td><td width="50%">${escapeHtml(fname)}</td></tr>
          <tr><td>Email:</td><td>${escapeHtml(email)}</td></tr>
          <tr><td>Phone:</td><td>${escapeHtml(phone)}</td></tr>
          <tr><td>Subject:</td><td>${escapeHtml(subject)}</td></tr>
          <tr><td>Message:</td><td>${escapeHtml(message)}</td></tr>
          <tr><td>Form URL:</td><td>${escapeHtml(formUrl)}</td></tr>
          <tr><td>IP Address:</td><td>${escapeHtml(ip)}</td></tr>
        </tbody>
      </table>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"B3NET Website" <${process.env.SMTP_USER}>`,
    to: "info@b3net.net",
    subject: "New Contact Submission from " + fname,
    html,
  });
}

// Basic HTML escape (avoid breaking template)
function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

module.exports = { sendContactMail };
