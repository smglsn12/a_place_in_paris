import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section id="stories" className="scroll-mt-20 bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Client stories"
          title="Settled in, glasses raised"
          description="The first clients who now call Paris home."
        />

        <div className="mx-auto mt-14 grid max-w-2xl gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-soft"
            >
              <Quote size={28} className="text-gold" />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-5">
                <div className="font-serif text-base font-semibold text-ink">
                  {t.name}
                </div>
                <div className="mt-0.5 text-sm text-mist">{t.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
