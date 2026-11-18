import { Check, Sparkles } from "lucide-react";
import { PACKAGES } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-20 bg-brand py-24 text-white sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Packages"
          title="Choose how much you'd like me to handle"
          description="Three ways to work together. Tell me what you need and I'll send a quote. Third-party costs like deposits and agency fees are always separate and never marked up."
          inverted
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-3 lg:gap-10">
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className="relative flex flex-col border-t border-white/50 pt-8">
              {pkg.featured && (
                <span className="absolute -top-3.5 left-0 inline-flex items-center gap-1.5 bg-white px-3 py-1 text-xs font-medium text-brand">
                  <Sparkles size={13} /> Most popular
                </span>
              )}

              <h3 className="font-serif text-4xl leading-tight sm:text-5xl">{pkg.name}</h3>
              <p className="mt-3 text-lg text-white/85">{pkg.tagline}</p>

              <ul className="mt-8 flex flex-1 flex-col">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 border-t border-white/20 py-3 text-[0.95rem] text-white/90"
                  >
                    <Check size={16} strokeWidth={2} className="mt-1 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/#contact"
                className={`mt-8 inline-flex items-center justify-center px-6 py-4 text-base font-medium transition-colors ${
                  pkg.featured
                    ? "bg-white text-brand hover:bg-fog"
                    : "border border-white text-white hover:bg-white hover:text-brand"
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
