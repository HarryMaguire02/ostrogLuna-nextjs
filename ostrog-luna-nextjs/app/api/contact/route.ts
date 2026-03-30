import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  return str.replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c] ?? c));
}

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message, consent } = await request.json();

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Ostrog Luna <noreply@notify.ostrogluna.com>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New contact form message from ${escapeHtml(name)}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
          <!-- Header -->
          <div style="background:#303C78;padding:24px;text-align:center;border-radius:8px 8px 0 0;">
            <img src="${process.env.SITE_URL}/ostrog-luna-logo-footer.png" alt="Ostrog Luna" height="48" style="height:48px;" />
          </div>

          <!-- Body -->
          <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;padding:32px 24px;">
            <h2 style="color:#303C78;font-size:20px;margin:0 0 24px;">New Contact Form Submission</h2>

            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;width:140px;vertical-align:top;">Name</td>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#303C78;font-weight:600;">${escapeHtml(name)}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;width:140px;vertical-align:top;">Phone</td>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#303C78;font-weight:600;">${escapeHtml(phone)}</td>
              </tr>` : ""}
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;width:140px;vertical-align:top;">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#303C78;font-weight:600;">
                  <a href="mailto:${escapeHtml(email)}" style="color:#303C78;">${escapeHtml(email)}</a>
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;width:140px;vertical-align:top;">Message</td>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#303C78;">${escapeHtml(message)}</td>
              </tr>` : ""}
              <tr>
                <td style="padding:12px 0;color:#6b7280;width:140px;vertical-align:top;">Consent</td>
                <td style="padding:12px 0;color:#303C78;font-weight:600;">${consent ? "Yes" : "No"}</td>
              </tr>
            </table>
          </div>

          <!-- Footer -->
          <div style="text-align:center;padding:16px;color:#9ca3af;font-size:12px;">
            Sent from the Ostrog Luna contact form
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
