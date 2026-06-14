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
              A boutique relocation concierge helping US citizens move to Paris
              with clarity and calm. Based in the 4th, working across France.
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
            <a href="mailto:bonjour@aplaceinparis.com" className="text-sm text-cream/70 transition-colors hover:text-cream">
              bonjour@aplaceinparis.com
            </a>
            <a href="tel:+33184800000" className="text-sm text-cream/70 transition-colors hover:text-cream">
              +33 1 84 80 00 00
            </a>
            <span className="text-sm text-cream/70">12 Rue de Rivoli, 75004 Paris</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>© {2026} A Place in Paris. All rights reserved.</p>
          <p>Not affiliated with any government agency. Independent relocation advisors.</p>
        </div>
      </div>
    </footer>
  );
}
