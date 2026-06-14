import { PROCESS_STEPS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-20 text-cream sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "34px 34px" }} />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="How it works"
          title="A calm, clear path to your front door"
          description="No mystery, no missed steps. You always know what's done, what's next, and what I need from you."
          inverted
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.number}
              className="flex flex-col gap-3 bg-ink p-8 transition-colors hover:bg-brand"
            >
              <span className="font-serif text-4xl font-semibold text-gold-soft">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-semibold text-cream">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
