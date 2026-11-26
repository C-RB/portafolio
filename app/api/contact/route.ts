import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_EMAIL = "c.rojas22@ufromail.cl";

// Same limits as the form's maxLength attributes.
const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = Record<keyof typeof LIMITS, string>;

/** Returns the trimmed fields, or null if any is missing, too long or malformed. */
function parseFields(body: Record<string, unknown>): Fields | null {
  const fields = {} as Fields;
  for (const [key, limit] of Object.entries(LIMITS) as [keyof Fields, number][]) {
    const value = body[key];
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    if (!trimmed || trimmed.length > limit) return null;
    fields[key] = trimmed;
  }
  return EMAIL_PATTERN.test(fields.email) ? fields : null;
}

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot filled in: answer as if it worked, without sending anything.
  if ((body as Record<string, unknown>).company_url) {
    return NextResponse.json({ ok: true });
  }

  const fields = parseFields(body as Record<string, unknown>);
  if (!fields) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  const { name, email, subject, message } = fields;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Camilo Rojas <contacto@camilo-rojas.dev>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Portafolio] ${subject.replace(/[\r\n]+/g, " ")}`,
    text: `De: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
