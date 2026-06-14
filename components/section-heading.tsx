export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  inverted?: boolean;
}) {
  return (
    <div
      className={`flex max-w-2xl flex-col gap-4 ${
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left"
      }`}
    >
      <span
        className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase ${
          inverted ? "text-gold-soft" : "text-gold"
        }`}
      >
        <span className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-3xl leading-tight font-semibold text-balance sm:text-4xl md:text-[2.75rem] ${
          inverted ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed text-pretty sm:text-lg ${
            inverted ? "text-cream/70" : "text-mist"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
