import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we handle"
          title="Everything between the dream and the doorstep"
          description="One team for the whole move. Pick the pieces you need, or hand us the keys to all of it."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-100 text-brand transition-colors group-hover:bg-ink group-hover:text-cream">
                <service.icon size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {service.description}
              </p>
              <ul className="mt-5 flex flex-col gap-2.5 border-t border-ink/10 pt-5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={2.5} />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-ink"
          >
            See exactly how each service works
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
