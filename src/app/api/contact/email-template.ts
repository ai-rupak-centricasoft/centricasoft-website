import { readFileSync } from "fs";
import { join } from "path";

type ContactEmailInput = {
  name: string;
  email: string;
  company?: string;
  interest: string;
  message: string;
};

export type ContactRawEmail = {
  rawMessage: string;
  subject: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function encodeMimeHeader(value: string) {
  return `=?UTF-8?B?${Buffer.from(sanitizeHeader(value), "utf8").toString("base64")}?=`;
}

function wrapBase64(value: string) {
  return value.match(/.{1,76}/g)?.join("\r\n") ?? value;
}

function renderContactEmailHtml({ name, email, company, interest, message }: ContactEmailInput) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = company ? escapeHtml(company) : "";
  const safeInterest = escapeHtml(interest);
  const safeMessage = escapeHtml(message);
  const replySubject = encodeURIComponent(`Re: Your enquiry about ${interest}`);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>New Enquiry</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700;800&display=swap');
    @media only screen and (max-width: 520px) {
      .email-shell { padding: 18px 10px !important; }
      .email-card { width: 100% !important; border-radius: 12px !important; }
      .email-header,
      .email-body,
      .email-footer { padding-left: 22px !important; padding-right: 22px !important; }
      .email-header { padding-top: 26px !important; padding-bottom: 24px !important; }
      .email-body { padding-top: 28px !important; padding-bottom: 30px !important; }
      .email-brand,
      .email-header-badge,
      .email-footer-left,
      .email-footer-right { display: block !important; width: 100% !important; text-align: left !important; }
      .email-header-badge { padding-top: 18px !important; }
      .brand-logo-cell { width: 42px !important; }
      .brand-logo { width: 36px !important; height: 36px !important; }
      .email-title { font-size: 22px !important; line-height: 1.28 !important; }
      .detail-label,
      .detail-value { display: block !important; width: 100% !important; text-align: left !important; }
      .detail-label { padding-bottom: 2px !important; }
      .detail-value { padding-top: 0 !important; }
      .reply-link { display: block !important; text-align: center !important; }
      .email-footer-right { padding-top: 10px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F7FAFD;font-family:'Albert Sans',Arial,Helvetica,sans-serif;color:#001234">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="email-shell" style="background-color:#F7FAFD;padding:32px 16px">
    <tr>
      <td align="center">
        <table role="presentation" width="620" cellpadding="0" cellspacing="0" class="email-card" style="max-width:620px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #D6E8F4">

          <!-- HEADER -->
          <tr>
            <td class="email-header" style="background:#002057;background-image:linear-gradient(135deg,#001234 0%,#002057 48%,#0077B6 100%);padding:32px 36px 28px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle" class="email-brand">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="brand-logo-cell" width="56" valign="middle" style="padding:0 14px 0 0">
                          <table role="presentation" width="44" height="44" cellpadding="0" cellspacing="0" style="width:44px;height:44px;background:#ffffff;border-radius:10px;border:1px solid rgba(214,236,250,0.55)">
                            <tr>
                              <td align="center" valign="middle" style="padding:5px">
                                <img class="brand-logo" src="cid:centricasoft-logo@centricasoft.com" width="32" height="32" alt="CentricaSoft" style="display:block;width:32px;height:32px;border:0;outline:none;text-decoration:none"/>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle">
                          <p style="margin:0;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:23px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;line-height:1.1">CentricaSoft</p>
                          <p style="margin:8px 0 0;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:12px;color:#A8CFE6;letter-spacing:0.08em;text-transform:uppercase">Innovate. Optimize. Operationalize.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" valign="middle" class="email-header-badge">
                    <span style="display:inline-block;border:1px solid rgba(168,207,230,0.36);border-radius:999px;padding:8px 13px;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;color:#D6ECFA;letter-spacing:0.14em;text-transform:uppercase">Contact Form</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ACCENT BAR -->
          <tr>
            <td style="background:#1EBFFF;background-image:linear-gradient(90deg,#1EBFFF 0%,#0077B6 52%,#002057 100%);height:4px;font-size:0;line-height:0">&nbsp;</td>
          </tr>

          <!-- BODY -->
          <tr>
            <td class="email-body" style="padding:34px 36px 36px">

              <!-- Title -->
              <h1 class="email-title" style="margin:0;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:24px;font-weight:800;line-height:1.25;color:#001234;letter-spacing:-0.02em">New enquiry received</h1>
              <p style="margin:8px 0 28px;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:14px;line-height:1.65;color:#6B8FA8">A visitor submitted the contact form. Their details are below.</p>

              <!-- Sender card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;background:#F7FAFD;border:1px solid #D6E8F4;border-radius:12px;margin-bottom:24px">
                <tr>
                  <td style="padding:20px 22px 10px">
                    <p style="margin:0 0 4px;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:10px;font-weight:800;color:#6B8FA8;letter-spacing:0.14em;text-transform:uppercase">Name</p>
                    <p style="margin:0;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:18px;font-weight:800;color:#001234;line-height:1.35">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 22px">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #E0EDF7">
                      <tr>
                        <td width="36%" class="detail-label" style="padding:14px 0;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:12px;font-weight:800;color:#6B8FA8;letter-spacing:0.08em;text-transform:uppercase">Email</td>
                        <td class="detail-value" style="padding:14px 0;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:14px;color:#1A3A5C;text-align:right"><a href="mailto:${safeEmail}" style="color:#0077B6;text-decoration:none;font-weight:700">${safeEmail}</a></td>
                      </tr>
                      ${
                        safeCompany
                          ? `<tr>
                        <td width="36%" class="detail-label" style="padding:14px 0;border-top:1px solid #E0EDF7;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:12px;font-weight:800;color:#6B8FA8;letter-spacing:0.08em;text-transform:uppercase">Company</td>
                        <td class="detail-value" style="padding:14px 0;border-top:1px solid #E0EDF7;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:14px;color:#1A3A5C;text-align:right;font-weight:700">${safeCompany}</td>
                      </tr>`
                          : ""
                      }
                      <tr>
                        <td width="36%" class="detail-label" style="padding:14px 0;border-top:1px solid #E0EDF7;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:12px;font-weight:800;color:#6B8FA8;letter-spacing:0.08em;text-transform:uppercase">Interest</td>
                        <td class="detail-value" style="padding:14px 0;border-top:1px solid #E0EDF7;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:14px;color:#001234;text-align:right;font-weight:800">${safeInterest}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message label -->
              <p style="margin:0 0 10px;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:11px;font-weight:800;color:#6B8FA8;letter-spacing:0.14em;text-transform:uppercase">Message</p>

              <!-- Message body -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
                <tr>
                  <td style="background:#ffffff;border:1px solid #D6E8F4;border-radius:12px;padding:20px 22px">
                    <p style="margin:0;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:15px;color:#1A3A5C;line-height:1.75;white-space:pre-wrap">${safeMessage}</p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="mailto:${safeEmail}?subject=${replySubject}" class="reply-link" style="display:inline-block;background:#002057;border-radius:999px;padding:13px 22px;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:13px;font-weight:800;color:#ffffff;text-decoration:none;letter-spacing:0.02em">Reply to ${safeName} &rarr;</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td class="email-footer" style="background:#F7FAFD;border-top:1px solid #E0EDF7;padding:20px 36px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="email-footer-left">
                    <p style="margin:0;font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:11px;color:#6B8FA8;line-height:1.5">&copy; 2026 CentricaSoft </p>
                  </td>
                  <td align="right" valign="middle" class="email-footer-right">
                    <a href="https://centricasoft.com" style="font-family:'Albert Sans',Arial,Helvetica,sans-serif;font-size:11px;color:#0077B6;text-decoration:none;font-weight:800">centricasoft.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactRawEmail(input: ContactEmailInput): ContactRawEmail {
  const html = renderContactEmailHtml(input);
  const logoBase64 = readFileSync(
    join(process.cwd(), "public", "assest", "logo-email.png"),
  ).toString("base64");
  const subject = `New enquiry: ${input.interest} - from ${input.name}`;
  const plainText = [
    "New enquiry received",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    input.company ? `Company: ${input.company}` : "",
    `Interest: ${input.interest}`,
    "",
    input.message,
  ]
    .filter(Boolean)
    .join("\n");
  const relatedBoundary = `related-${Date.now()}`;
  const alternativeBoundary = `alternative-${Date.now()}`;
  const rawMessage = [
    'From: "CentricaSoft Contact" <contact@centricasoft.com>',
    "To: contact@centricasoft.com",
    `Reply-To: ${sanitizeHeader(input.email)}`,
    `Subject: ${encodeMimeHeader(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/related; boundary="${relatedBoundary}"`,
    "",
    `--${relatedBoundary}`,
    `Content-Type: multipart/alternative; boundary="${alternativeBoundary}"`,
    "",
    `--${alternativeBoundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    wrapBase64(Buffer.from(plainText, "utf8").toString("base64")),
    "",
    `--${alternativeBoundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    wrapBase64(Buffer.from(html, "utf8").toString("base64")),
    "",
    `--${alternativeBoundary}--`,
    "",
    `--${relatedBoundary}`,
    'Content-Type: image/png; name="logo-email.png"',
    "Content-Transfer-Encoding: base64",
    "Content-ID: <centricasoft-logo@centricasoft.com>",
    "X-Attachment-Id: centricasoft-logo@centricasoft.com",
    'Content-Disposition: inline; filename="logo-email.png"',
    "",
    wrapBase64(logoBase64),
    "",
    `--${relatedBoundary}--`,
    "",
  ].join("\r\n");

  return { rawMessage, subject };
}
