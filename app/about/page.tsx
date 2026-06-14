import type { Metadata } from "next";
import { VALUES, ABOUT_STATS } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "A Place in Paris is a boutique relocation concierge founded by Americans who made the move themselves. Meet the team that turns French bureaucracy into a clear path home.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our story"
        title="We made the move too — then made it our work"
        description="A Place in Paris began with a single overwhelming relocation: our own. We turned a decade of hard-won know-how into the service we wish we'd had."
      />

      {/* Story */}
      <section className="pb-8">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-ink-soft">
            <p>
              In 2014, our founders left careers in the US to chase a long-held
              dream of living in Paris. What followed was a year of mistranslated
              forms, missed appointments, rejected applications, and the slow,
              humbling education that French administration gives every newcomer.
            </p>
            <p>
              They got there in the end — apartment, bank account, residence
              permit, a neighborhood café that knew their order. And friends back
              home started asking the same question: <em>how did you actually do it?</em>
            </p>
            <p>
              A Place in Paris is the answer, built into a service. Today we&apos;re a
              small team of relocation advisors, French-administration specialists,
              and on-the-ground fixers who have collectively guided hundreds of
              American families through the move — so their year-one looks a lot
              calmer than ours did.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-soft"
              >
                <div className="font-serif text-3xl font-semibold text-brand">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm leading-tight text-mist">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              <span className="h-px w-8 bg-current opacity-60" />
              What guides us
            </span>
            <h2 className="mt-5 font-serif text-3xl leading-tight font-semibold text-ink sm:text-4xl">
              The principles behind every move
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="flex gap-5 rounded-2xl border border-ink/10 bg-white p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream-100 text-brand">
                  <value.icon size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's get you to Paris"
        description="Whether you're years out or already packing, a short call is the best first step. We'd love to hear where you're headed."
      />
    </main>
  );
}
