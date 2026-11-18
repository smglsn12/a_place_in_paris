import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section id="stories" className="scroll-mt-20 bg-fog py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Client stories"
          title="Settled in, glasses raised"
          description="The first clients who now call Paris home."
        />

        <div className="mt-16 grid gap-16 sm:mt-20">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="max-w-4xl">
              <blockquote className="text-2xl leading-snug text-ink text-pretty sm:text-3xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-10">
                <div className="text-base font-medium text-ink">{t.name}</div>
                <div className="mt-0.5 text-sm text-ink-soft">{t.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
