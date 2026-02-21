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
      from: "Ostrog Luna <onboarding@resend.dev>",
      to: "info@ostrogluna.com",
      replyTo: email,
      subject: `New contact form message from ${escapeHtml(name)}`,
      html: `
        <h2 style="color:#303C78;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message)}</p>` : ""}
        <p><strong>Consent to telephone contact:</strong> ${consent ? "Yes" : "No"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
