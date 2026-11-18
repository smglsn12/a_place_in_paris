"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Good questions"
          title="The things everyone asks first"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            Still wondering about your situation? Every move is different, so the
            quickest way to a real answer is a short call with me.
            <a
              href="#contact"
              className="mt-5 block w-fit border-b border-ink pb-0.5 font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Ask us directly →
            </a>
          </p>

          <div className="border-t border-ink/20">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.question} className="border-b border-ink/20">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg text-ink sm:text-xl">{faq.question}</span>
                    <ChevronDown
                      size={22}
                      strokeWidth={1.5}
                      className={`shrink-0 text-ink transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="overflow-hidden leading-relaxed text-ink-soft">
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
