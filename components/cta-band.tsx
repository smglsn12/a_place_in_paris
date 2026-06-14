import { ArrowRight } from "lucide-react";

export function CtaBand({
  title = "Ready to start your move?",
  description = "Book a free 30-minute discovery call. We'll talk through your timeline and map the path to Paris — no obligation.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center text-cream sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cream/70 text-pretty">
              {description}
            </p>
            <a
              href="/#contact"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Book a free discovery call
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
