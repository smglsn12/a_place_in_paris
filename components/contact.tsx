"use client";

import { useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";

const TIMELINES = [
  "Just exploring",
  "Within 3 months",
  "3–6 months",
  "6–12 months",
  "Already in France",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: pitch + contact details */}
          <div className="relative flex flex-col justify-between gap-10 bg-ink p-9 text-cream sm:p-11">
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
            <div className="relative">
              <span className="text-xs font-semibold tracking-[0.22em] text-gold-soft uppercase">
                Let&apos;s begin
              </span>
              <h2 className="mt-4 font-serif text-3xl leading-tight font-semibold sm:text-4xl">
                Book your free discovery call
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-cream/70">
                Tell me a little about your plans. I&apos;ll reply within one
                business day with next steps and a time to talk — no obligation.
              </p>
            </div>

            <ul className="relative flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-soft" />
                <a href="mailto:jillfindsyourparisapt@gmail.com" className="hover:underline">
                  jillfindsyourparisapt@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="p-9 sm:p-11">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <CheckCircle2 size={48} className="text-gold" />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                  Merci — we&apos;ve got it.
                </h3>
                <p className="mt-3 max-w-sm text-mist">
                  Your message is on its way to me. Expect a reply within one
                  business day. À bientôt!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder="jane@email.com"
                    />
                  </Field>
                </div>

                <Field label="When are you hoping to move?" htmlFor="timeline">
                  <select id="timeline" name="timeline" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select a timeline
                    </option>
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Tell us about your move" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Where are you moving from, who's coming, and what's on your mind?"
                  />
                </Field>

                {error && (
                  <p className="flex items-center gap-2 rounded-xl bg-terracotta/10 px-4 py-3 text-sm text-terracotta">
                    <AlertCircle size={16} className="shrink-0" />
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Request my discovery call
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-mist">
                  We&apos;ll never share your details. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-cream/40 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-mist/70 focus:border-ink focus:bg-white focus:ring-2 focus:ring-ink/10";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink-soft">{label}</span>
      {children}
    </label>
  );
}
