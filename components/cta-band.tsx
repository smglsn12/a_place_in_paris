import { ArrowRight } from "lucide-react";

export function CtaBand({
  title = "Ready to start your move?",
  description = "Book a free 30-minute discovery call. I'll talk through your timeline and map out your move, with no obligation.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-5xl font-serif text-5xl leading-[1.02] text-ink text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
          {description}
        </p>
        <a
          href="/#contact"
          className="group mt-10 inline-flex items-center justify-center gap-2 bg-ink px-7 py-4 text-base font-medium text-white transition-colors hover:bg-brand"
        >
          Book a free discovery call
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
