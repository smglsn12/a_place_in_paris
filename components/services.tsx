import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="How I help"
          title="Everything between arriving and feeling at home"
          description="Pick the help you need, or bring me in for your whole move: from your first dossier to your first evening at home."
        />

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.title} className="flex flex-col border-t border-ink/20 pt-7">
              <service.icon size={26} strokeWidth={1.5} className="text-brand" />
              <h3 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-[2.1rem]">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                    <Check size={16} className="mt-1 shrink-0 text-brand" strokeWidth={2} />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="/services"
            className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-base font-medium text-ink transition-colors hover:border-brand hover:text-brand"
          >
            See exactly how each service works
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
