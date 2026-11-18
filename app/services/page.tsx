import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { Packages } from "@/components/packages";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How I help you move to Paris: neighborhood guidance, rental dossier and guarantor setup, apartment-search coaching, apartment tours, utilities, wi-fi and phone setup, and decorating.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="How I help"
        title="Every step of your move, supported"
        description="Pick the help you need or bring me in for your whole move. Here's exactly what each service looks like."
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="container-page">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="grid items-start gap-8 border-b border-ink/20 py-14 last:border-b-0 sm:py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20"
            >
              <div>
                <service.icon size={28} strokeWidth={1.5} className="text-brand" />
                <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{service.description}</p>
              </div>

              <div className="lg:pt-12">
                <p className="text-lg leading-relaxed text-ink">{service.detail}</p>
                <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 border-t border-ink/15 py-3 text-[0.95rem] text-ink-soft"
                    >
                      <Check size={16} className="mt-1 shrink-0 text-brand" strokeWidth={2} />
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
        description="That's what the discovery call is for. I'll listen to your situation and recommend exactly the help that fits, nothing more."
      />
    </main>
  );
}
