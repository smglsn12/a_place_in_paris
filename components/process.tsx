import { PROCESS_STEPS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-fog py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="A calm, clear path to your front door"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            No mystery, no missed steps. You always know what&apos;s done, what&apos;s
            next, and what I need from you.
          </p>

          <ol className="border-t border-ink/20">
            {PROCESS_STEPS.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-b border-ink/20 py-7 sm:grid-cols-[5rem_1fr]"
              >
                <span className="font-serif text-4xl leading-none text-brand sm:text-5xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-3xl leading-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
