import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-ink) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream-100/70 px-4 py-1.5 text-xs font-medium text-ink-soft">
            <Sparkles size={13} className="text-gold" />
            Boutique apartment finding in Paris
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl md:text-6xl">
            Your Paris apartment,
            <span className="block text-brand italic">found for you.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist text-pretty">
            I&apos;m Jill. I help US citizens find the right apartment in Paris.
            From narrowing down neighborhoods to signing the lease, I handle the
            hunt so you can focus on the exciting part: your new life here.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Book a free discovery call
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-cream-100"
            >
              Explore my services
            </a>
          </div>

          <p className="mt-6 text-sm text-mist">
            No obligation · 30 minutes · A real conversation with Jill
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  const stats = [
    { value: "2", label: "Clients placed" },
    { value: "100%", label: "Found their home" },
    { value: "1.5 yrs", label: "Living in Paris" },
  ];

  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2rem] bg-brand/5" />
      <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-card">
        {/* Stylized Paris skyline */}
        <div className="relative h-56 bg-gradient-to-b from-brand to-brand-600">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0.5px, transparent 0)", backgroundSize: "20px 20px" }} />
          <svg
            viewBox="0 0 400 220"
            className="absolute bottom-0 h-full w-full text-cream"
            preserveAspectRatio="xMidYMax meet"
            aria-hidden
          >
            {/* Eiffel Tower */}
            <g fill="currentColor" opacity="0.95">
              <path d="M196 40 L200 30 L204 40 L203 70 L210 120 L218 200 L208 200 L200 150 L192 200 L182 200 L190 120 L197 70 Z" />
              <rect x="188" y="92" width="24" height="5" />
              <rect x="183" y="130" width="34" height="5" />
            </g>
            {/* Side rooftops */}
            <g fill="currentColor" opacity="0.55">
              <rect x="40" y="150" width="40" height="60" />
              <rect x="86" y="130" width="30" height="80" />
              <path d="M40 150 L60 132 L80 150 Z" />
              <rect x="300" y="140" width="34" height="70" />
              <rect x="340" y="160" width="30" height="50" />
              <path d="M300 140 L317 124 L334 140 Z" />
              <circle cx="355" cy="150" r="14" />
              <rect x="353" y="150" width="4" height="60" />
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-3 divide-x divide-ink/10 border-t border-ink/10">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-5 text-center">
              <div className="font-serif text-2xl font-semibold text-ink">
                {s.value}
              </div>
              <div className="mt-1 text-[0.7rem] leading-tight text-mist">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
