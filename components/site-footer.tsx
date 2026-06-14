import { NAV_LINKS } from "@/lib/content";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo inverted />
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              A boutique apartment-finding service helping US citizens find the
              right home in Paris — personally, one client at a time.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">
              Explore
            </h3>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream/70 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">
              Get in touch
            </h3>
            <a href="mailto:jillfindsyourparisapt@gmail.com" className="text-sm text-cream/70 transition-colors hover:text-cream">
              jillfindsyourparisapt@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>© {2026} A Place in Paris. All rights reserved.</p>
          <p>Independent apartment-finding service for newcomers to Paris.</p>
        </div>
      </div>
    </footer>
  );
}
