"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Good questions"
          title="The things everyone asks first"
          align="left"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <p className="max-w-sm text-base leading-relaxed text-mist">
            Still wondering about your situation? Every move is different — the
            quickest way to a real answer is a short call with an advisor.
            <a href="#contact" className="mt-4 block font-semibold text-brand underline underline-offset-4">
              Ask us directly →
            </a>
          </p>

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg font-medium text-ink">
                      {faq.question}
                    </span>
                    <Plus
                      size={20}
                      className={`shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="overflow-hidden text-[0.95rem] leading-relaxed text-mist">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
