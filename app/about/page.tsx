import type { Metadata } from "next";
import Image from "next/image";
import { VALUES, ABOUT_STATS } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";

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
      <section className="bg-white py-20 sm:py-28">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden lg:max-w-none">
            <Image
              src="/founder.JPG"
              alt="Jill, the founder of A Place in Paris"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
            <p className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
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

        {/* Stats */}
        <div className="container-page mt-20 grid grid-cols-2 gap-x-8 gap-y-10 sm:mt-28 sm:grid-cols-4">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label} className="border-t border-ink/20 pt-6">
              <div className="font-serif text-5xl leading-none text-ink sm:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm text-ink-soft sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-fog py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="What guides me"
            title="The principles behind everything I do"
          />

          <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2">
            {VALUES.map((value) => (
              <article key={value.title} className="border-t border-ink/20 pt-7">
                <value.icon size={26} strokeWidth={1.5} className="text-brand" />
                <h3 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-[2.1rem]">
                  {value.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                  {value.description}
                </p>
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
