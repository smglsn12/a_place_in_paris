export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
}) {
  return (
    <div className="flex max-w-5xl flex-col items-start gap-5 text-left">
      <span className={`text-sm sm:text-base ${inverted ? "text-white/75" : "text-mist"}`}>
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-5xl leading-[1.02] text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem] ${
          inverted ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-lg leading-relaxed text-pretty ${
            inverted ? "text-white/85" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
