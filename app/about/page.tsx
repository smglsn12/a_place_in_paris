import type { Metadata } from "next";
import Image from "next/image";
import { VALUES, ABOUT_STATS } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jill, the relocation assistant behind A Place in Paris. A US immigrant with a business degree and real estate background, helping fellow Americans settle into life in Paris.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Meet your Paris relocation assistant"
        description="A Place in Paris is a personal service: just me, helping fellow Americans make a home in the city I've come to love."
      />

      {/* Bio + photo */}
      <section className="pb-8">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2rem] bg-brand/5" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-ink/10 shadow-card">
              <Image
                src="/founder.JPG"
                alt="Jill, the founder of A Place in Paris"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 text-lg leading-relaxed text-ink-soft">
            <p className="font-serif text-2xl text-ink sm:text-3xl">
              Hello! I&apos;m Jill and I&apos;m excited to work with you!
            </p>
            <p>
              With a business degree from San Francisco State University,
              including extensive real estate coursework, and my several months
              of experience navigating the apartment hunt space in Paris as a US
              immigrant, I am ready to help you make Paris your home!
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container-page grid grid-cols-2 gap-4 sm:grid-cols-4">
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
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              <span className="h-px w-8 bg-current opacity-60" />
              What guides me
            </span>
            <h2 className="mt-5 font-serif text-3xl leading-tight font-semibold text-ink sm:text-4xl">
              The principles behind everything I do
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
        title="Let's get you settled in Paris"
        description="Whether you're months out or already packing, a short call is the best first step. I'd love to hear where you're headed."
      />
    </main>
  );
}
