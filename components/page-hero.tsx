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
    <section className="bg-brand pt-40 pb-20 text-white sm:pt-48 sm:pb-28">
      <div className="container-page">
        <span className="text-sm text-white/75 sm:text-base">{eyebrow}</span>
        <h1 className="mt-5 max-w-6xl font-serif text-6xl leading-[0.95] text-balance sm:text-7xl lg:text-8xl xl:text-[8.5rem]">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 text-pretty sm:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
