import { Check, Sparkles } from "lucide-react";
import { PACKAGES } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Packages"
          title="Choose how much you'd like me to handle"
          description="Three ways to work together. Tell me what you need and I'll send a quote — third-party costs like deposits and agency fees are always separate and never marked up."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                pkg.featured
                  ? "border-ink bg-ink text-cream shadow-card lg:-mt-4 lg:pb-12"
                  : "border-ink/10 bg-white text-ink"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                  <Sparkles size={13} /> Most popular
                </span>
              )}

              <h3 className="font-serif text-2xl font-semibold">{pkg.name}</h3>
              <p
                className={`mt-1.5 text-sm ${
                  pkg.featured ? "text-cream/70" : "text-mist"
                }`}
              >
                {pkg.tagline}
              </p>

              <ul className="mt-7 flex flex-1 flex-col gap-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className={`mt-0.5 shrink-0 ${
                        pkg.featured ? "text-gold-soft" : "text-gold"
                      }`}
                    />
                    <span className={pkg.featured ? "text-cream/85" : "text-ink-soft"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  pkg.featured
                    ? "bg-cream text-ink"
                    : "bg-ink text-cream"
                }`}
              >
                Request a quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
