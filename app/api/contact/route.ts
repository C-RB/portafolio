import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_EMAIL = "c.rojas22@ufromail.cl";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Camilo Rojas <contacto@camilo-rojas.dev>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Portafolio] ${subject}`,
    text: `De: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
