"use client";

import { useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import { SectionHeading } from "./section-heading";

// Public Web3Forms access key. Submissions are delivered straight to
// the inbox the key was created for (originally jillfindsyourparisapt@gmail.com;
// replace the key with one made for hello.aplaceinparis@gmail.com). This key is meant to live in client code
// (that's how Web3Forms works); rotate or replace it anytime at web3forms.com.
const WEB3FORMS_ACCESS_KEY = "2ba653c6-d321-4336-a951-753ff48ed0f3";

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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New discovery-call request from ${data.name || "the website"}`,
          from_name: "A Place in Paris (Website)",
          ...data,
        }),
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !json.success) {
        throw new Error(json.message ?? "Something went wrong.");
      }
      setSubmitted(true);
    } catch {
      setError(
        "We couldn't send your message. Please try again, or email hello.aplaceinparis@gmail.com directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-fog py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Left: pitch + contact details */}
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Let's begin"
            title="Book your free discovery call"
            description="Tell me a little about your plans. I'll reply within one business day with next steps and a time to talk, with no obligation."
          />

          <ul className="flex flex-col gap-4 text-base">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand" />
              <a
                href="mailto:hello.aplaceinparis@gmail.com"
                className="text-ink underline-offset-4 hover:underline"
              >
                hello.aplaceinparis@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <div className="lg:pt-12">
          {submitted ? (
            <div className="flex h-full flex-col items-start justify-center">
              <CheckCircle2 size={44} strokeWidth={1.5} className="text-brand" />
              <h3 className="mt-5 font-serif text-4xl text-ink">
                Merci, we&apos;ve got it.
              </h3>
              <p className="mt-3 max-w-sm text-lg text-ink-soft">
                Your message is on its way to me. Expect a reply within one
                business day. À bientôt!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Honeypot: hidden from people, catches spam bots */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid gap-6 sm:grid-cols-2">
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
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Where are you moving from, who's coming, and what's on your mind?"
                />
              </Field>

              {error && (
                <p className="flex items-center gap-2 bg-terracotta/10 px-4 py-3 text-sm text-terracotta">
                  <AlertCircle size={16} className="shrink-0" />
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="group mt-1 inline-flex items-center justify-center gap-2 bg-ink px-7 py-4 text-base font-medium text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-ink"
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
              <p className="text-sm text-mist">
                We&apos;ll never share your details. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full border border-ink/20 bg-white px-4 py-3.5 text-base text-ink outline-none transition-colors placeholder:text-mist/70 focus:border-ink";

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
      <span className="text-sm text-ink-soft">{label}</span>
      {children}
    </label>
  );
}
