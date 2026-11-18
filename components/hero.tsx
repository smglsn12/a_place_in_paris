import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "2", label: "Clients helped" },
  { value: "100%", label: "Settled in" },
  { value: "1.5 yrs", label: "Living in Paris" },
];

export function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pt-32 pb-14 text-white sm:pb-20"
      >
        {/* Full-screen Paris at dusk, darkened toward the bottom so the headline reads clearly */}
        <ParisDusk />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent" />

        <div className="container-page relative animate-fade-up">
          <p className="text-sm text-white/80 sm:text-base">
            Boutique relocation assistance in Paris
          </p>

          <h1 className="mt-4 font-serif text-6xl leading-[0.95] text-balance sm:text-7xl md:text-8xl lg:text-[8.5rem]">
            Your move to Paris,
            <span className="block italic">made simple.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-white px-7 py-4 text-base font-medium text-ink transition-colors hover:bg-fog"
            >
              Book a free discovery call
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/70 px-7 py-4 text-base font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Explore my services
            </a>
          </div>

          <p className="mt-6 text-sm text-white/70">
            No obligation · 30 minutes · A real conversation with Jill
          </p>
        </div>
      </section>

      <section className="bg-fog py-20 sm:py-28">
        <div className="container-page">
          <p className="font-serif text-3xl leading-[1.15] text-ink text-pretty sm:text-4xl lg:text-[3.25rem]">
            I&apos;m Jill. I help US citizens settle into life in Paris. From
            preparing your rental dossier and coaching your apartment search to
            touring apartments and setting up your wi-fi, I&apos;m with you every step
            so you can focus on the exciting part: your new life here.
          </p>

          <div className="mt-14 grid grid-cols-3 border-t border-ink/20 sm:mt-20">
            {STATS.map((s) => (
              <div key={s.label} className="pt-6 pr-4">
                <div className="font-serif text-5xl leading-none text-ink sm:text-6xl">
                  {s.value}
                </div>
                <div className="mt-3 text-sm text-ink-soft sm:text-base">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const BUILDINGS = [
  { x: -4, w: 44, top: 170 },
  { x: 42, w: 36, top: 180 },
  { x: 80, w: 48, top: 162 },
  { x: 130, w: 30, top: 186 },
  { x: 240, w: 32, top: 184 },
  { x: 274, w: 50, top: 164 },
  { x: 326, w: 38, top: 176 },
  { x: 366, w: 40, top: 160 },
];

const STARS: [number, number, number][] = [
  [30, 22, 1], [72, 48, 0.7], [118, 18, 0.9], [150, 60, 0.6], [252, 30, 0.8],
  [280, 70, 0.6], [360, 24, 0.9], [384, 64, 0.7], [56, 84, 0.5], [340, 96, 0.5],
];

function ParisDusk() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="dusk-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--color-ink)" }} />
          <stop offset="0.5" style={{ stopColor: "var(--color-brand-600)" }} />
          <stop offset="0.82" style={{ stopColor: "var(--color-terracotta)", stopOpacity: 0.85 }} />
          <stop offset="1" style={{ stopColor: "var(--color-gold-soft)" }} />
        </linearGradient>
        <radialGradient id="dusk-glow" cx="200" cy="150" r="130" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={{ stopColor: "var(--color-gold-soft)", stopOpacity: 0.55 }} />
          <stop offset="1" style={{ stopColor: "var(--color-gold-soft)", stopOpacity: 0 }} />
        </radialGradient>
        <linearGradient id="tower-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--color-gold-soft)" }} />
          <stop offset="1" style={{ stopColor: "var(--color-gold)" }} />
        </linearGradient>
        <pattern id="tower-lattice" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0 H5 M0 0 V5" style={{ stroke: "var(--color-ink)" }} strokeWidth="0.6" strokeOpacity="0.45" fill="none" />
        </pattern>
        <mask id="moon-mask">
          <circle cx="322" cy="44" r="12" fill="white" />
          <circle cx="328" cy="39" r="11" fill="black" />
        </mask>
        <g id="tower">
          {/* spire + top platform */}
          <path d="M199 26 H201 L202.2 42 H197.8 Z" />
          <rect x="196.5" y="40" width="7" height="3" />
          {/* upper section */}
          <path d="M197.8 43 H202.2 Q203.5 95 210 132 H190 Q196.5 95 197.8 43 Z" />
          {/* second platform */}
          <rect x="186" y="130" width="28" height="4.5" />
          {/* middle section, hollow in the center */}
          <path
            fillRule="evenodd"
            d="M189 134.5 H211 Q216 152 223 166 H177 Q184 152 189 134.5 Z M196.5 138 H203.5 Q207.5 151 213.5 164 H186.5 Q192.5 151 196.5 138 Z"
          />
          {/* first platform */}
          <rect x="171" y="164" width="58" height="5" />
          {/* legs and arch */}
          <path d="M173 169 H227 Q232 186 238 202 H222 Q217 173 200 171.5 Q183 173 178 202 H162 Q168 186 173 169 Z" />
        </g>
      </defs>

      {/* sky, warm glow, stars, moon */}
      <rect width="400" height="220" fill="url(#dusk-sky)" />
      <rect width="400" height="220" fill="url(#dusk-glow)" />
      <g className="fill-cream">
        {STARS.map(([cx, cy, o]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.9" opacity={o} />
        ))}
        <circle cx="322" cy="44" r="12" mask="url(#moon-mask)" opacity="0.9" />
      </g>

      {/* distant rooftops and domes */}
      <g className="fill-ink" opacity="0.35">
        <path d="M0 220 V168 H20 V162 H38 V170 H60 V158 H70 V154 Q76 140 82 154 V158 H96 V166 H118 V160 H140 V172 H170 V220 Z" />
        <path d="M230 220 V172 H258 V162 H280 V168 H300 V156 H312 V150 Q318 134 324 150 V156 H338 V164 H360 V158 H382 V166 H400 V220 Z" />
      </g>

      {/* Eiffel Tower with lattice texture and beacon */}
      <use href="#tower" fill="url(#tower-fill)" />
      <use href="#tower" fill="url(#tower-lattice)" />
      <rect x="199.4" y="14" width="1.2" height="12" className="fill-gold-soft" />
      <circle cx="200" cy="14" r="5" className="fill-gold-soft" opacity="0.35" />
      <circle cx="200" cy="14" r="1.8" className="fill-cream" />

      {/* trees along the Champ de Mars */}
      <g className="fill-ink">
        {[150, 166, 182, 218, 234, 250].map((cx) => (
          <ellipse key={cx} cx={cx} cy="204" rx="11" ry="7" />
        ))}
        <rect x="140" y="204" width="120" height="16" />
      </g>

      {/* Haussmann buildings with mansard roofs and lit windows */}
      {BUILDINGS.map((b, bi) => (
        <g key={bi}>
          <g className="fill-ink">
            <path d={`M${b.x - 1} ${b.top} H${b.x + b.w + 1} L${b.x + b.w - 4} ${b.top - 10} H${b.x + 4} Z`} />
            <rect x={b.x + 6} y={b.top - 15} width="4" height="7" />
            <rect x={b.x + b.w - 12} y={b.top - 14} width="4" height="6" />
            <rect x={b.x} y={b.top} width={b.w} height={220 - b.top} />
          </g>
          {Array.from({ length: Math.floor((214 - b.top) / 10) }, (_, r) =>
            Array.from({ length: Math.floor((b.w - 6) / 9) }, (_, c) =>
              (bi * 5 + r * 3 + c * 7) % 4 === 0 ? (
                <rect
                  key={`${r}-${c}`}
                  x={b.x + 5 + c * 9}
                  y={b.top + 6 + r * 10}
                  width="4"
                  height="5"
                  className="fill-gold-soft"
                  opacity="0.9"
                />
              ) : null,
            ),
          )}
        </g>
      ))}
    </svg>
  );
}
