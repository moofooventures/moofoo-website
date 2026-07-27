import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";
import { PARTNERSHIP_TYPES } from "@/lib/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const partnershipType = String(body.partnershipType ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.honeypot ?? "").trim();

  // Bots that fill hidden fields get a fake success so they don't retry.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, business email, and message are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (!PARTNERSHIP_TYPES.includes(partnershipType as (typeof PARTNERSHIP_TYPES)[number])) {
    return NextResponse.json({ error: "Select a valid partnership type." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email delivery isn't configured yet. Please reach out directly at " +
          siteConfig.email +
          ".",
      },
      { status: 503 },
    );
  }

  const subject = `New ${partnershipType} inquiry from ${name}`;
  const text = [
    `Partnership type: ${partnershipType}`,
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MooFoo Ventures <onboarding@resend.dev>",
        to: [siteConfig.email],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "The message could not be sent. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "The message could not be sent. Please try again shortly." },
      { status: 502 },
    );
  }
}
