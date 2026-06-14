export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[24rem] w-[24rem] rounded-full bg-brand/10 blur-3xl" />
      </div>
      <div className="container-page max-w-3xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
          <span className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-serif text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist text-pretty">
          {description}
        </p>
      </div>
    </section>
  );
}
