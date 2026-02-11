import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_TARGET_EMAIL;

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;

  if (!resendApiKey || !contactEmail) {
    console.log("[contact] Missing RESEND_API_KEY or CONTACT_TARGET_EMAIL. Message skipped.", {
      name,
      email,
      message,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      text: message,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[contact] Failed to send email", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

