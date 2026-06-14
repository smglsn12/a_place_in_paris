import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { Packages } from "@/components/packages";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How I find your Paris apartment — neighborhood matching, listing search, in-person viewings, rental dossier and lease support, guarantor solutions, and move-in help.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="How I help"
        title="Every step of the apartment hunt, handled"
        description="Pick the help you need or hand me the whole search. Here's exactly what each part of finding your Paris apartment looks like when I run it for you."
      />

      <section className="pb-8">
        <div className="container-page flex flex-col gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className="grid items-start gap-8 bg-cream p-8 sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-cream">
                  <service.icon size={26} strokeWidth={1.8} />
                </span>
                <h2 className="mt-5 font-serif text-2xl font-semibold text-ink sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-3 leading-relaxed text-mist">{service.description}</p>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="leading-relaxed text-ink-soft">{service.detail}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink-soft"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Packages />
      <CtaBand
        title="Not sure which package you need?"
        description="That's what the discovery call is for. I'll listen to your situation and recommend exactly the help that fits — nothing more."
      />
    </main>
  );
}
