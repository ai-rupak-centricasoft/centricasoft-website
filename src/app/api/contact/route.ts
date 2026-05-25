import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional(),
  interest: z.string().min(1),
  message: z.string().trim().min(10).max(1500),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    const { name, email, company, interest, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: "CentricaSoft Contact <onboarding@resend.dev>",
      // to: "swarrupak@gmail.com",
      to: "contact@centricasoft.com",
      replyTo: email,
      subject: `New enquiry: ${interest} — from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e">
          <h2 style="margin-bottom:4px">New contact form submission</h2>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#64748b;width:120px">Name</td><td style="padding:8px 0;font-weight:500">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#0ea5e9">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#64748b">Company</td><td style="padding:8px 0">${company}</td></tr>` : ""}
            <tr><td style="padding:8px 0;color:#64748b">Interest</td><td style="padding:8px 0">${interest}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
          <p style="color:#64748b;margin-bottom:8px">Message</p>
          <p style="white-space:pre-wrap;background:#f8fafc;padding:16px;border-radius:8px;margin:0">${message}</p>
          <p style="margin-top:24px;font-size:12px;color:#94a3b8">Sent via centricasoft.com contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
