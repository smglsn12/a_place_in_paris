import { NAV_LINKS } from "@/lib/content";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-brand text-white">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 leading-relaxed text-white/80">
              A boutique relocation service helping US citizens settle into life
              in Paris, personally, one client at a time.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <h3 className="text-sm text-white/65">Explore</h3>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-base underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm text-white/65">Get in touch</h3>
            <a
              href="mailto:hello.aplaceinparis@gmail.com"
              className="w-fit text-base underline-offset-4 hover:underline"
            >
              hello.aplaceinparis@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/25 pt-6 text-sm text-white/70 sm:flex-row sm:items-center">
          <p>© {2026} A Place in Paris. All rights reserved.</p>
          <p>Independent relocation assistance for newcomers to Paris.</p>
        </div>
      </div>
    </footer>
  );
}
