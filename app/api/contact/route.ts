import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  timeline?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const timeline = body.timeline?.trim() ?? "Not specified";
  const message = body.message?.trim() ?? "";

  // Validation
  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 422 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  // ── No provider configured yet ────────────────────────────────────────────
  // Lets the form work in development/demo before you add a key. Once you set
  // WEB3FORMS_ACCESS_KEY (locally in .env.local, or in your Vercel project
  // settings) real emails will be delivered to your inbox.
  if (!accessKey) {
    console.warn(
      "[contact] WEB3FORMS_ACCESS_KEY is not set; not sending.",
      { name, email, timeline, message },
    );
    // In dev, let the success flow work without a key so the UI is testable.
    // In production, never fake success: tell the visitor how to reach Jill.
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json(
      {
        ok: false,
        error:
          "Our contact form isn't fully set up yet. Please email jillfindsyourparisapt@gmail.com directly.",
      },
      { status: 503 },
    );
  }

  // ── Web3Forms (default) ────────────────────────────────────────────────────
  // Free tier, no domain verification needed. Get a key at https://web3forms.com
  // The key is tied to the inbox you want submissions delivered to.
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New discovery-call request from ${name}`,
        from_name: "A Place in Paris (Website)",
        name,
        email,
        timeline,
        message: message || "(no message provided)",
      }),
    });

    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!res.ok || !data.success) {
      console.error("[contact] Web3Forms error:", data);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We couldn't send your message. Please try again, or email jillfindsyourparisapt@gmail.com directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Network error:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please try again." },
      { status: 502 },
    );
  }
}

/*
 * ── Want to use Resend instead? ─────────────────────────────────────────────
 * 1. npm install resend
 * 2. Verify a sending domain at https://resend.com and set RESEND_API_KEY.
 * 3. Replace the Web3Forms block above with:
 *
 *    import { Resend } from "resend";
 *    const resend = new Resend(process.env.RESEND_API_KEY);
 *    await resend.emails.send({
 *      from: "A Place in Paris <hello@yourdomain.com>",
 *      to: "jillfindsyourparisapt@gmail.com",
 *      replyTo: email,
 *      subject: `New discovery-call request from ${name}`,
 *      text: `Name: ${name}\nEmail: ${email}\nTimeline: ${timeline}\n\n${message}`,
 *    });
 *
 * Formspree works similarly: POST the fields to your form's endpoint URL.
 */
