"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";
import { Logo } from "./logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every page opens on a dark band, so the bar starts see-through with white
  // text and turns solid white once the visitor scrolls (or opens the menu).
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-ink/10 bg-white text-ink"
          : "border-b border-transparent bg-transparent text-white"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-8">
        <a href="/" className="z-50" aria-label="A Place in Paris, home">
          <Logo />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.95rem] underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/#contact"
            className={`px-5 py-2.5 text-sm font-medium transition-colors ${
              solid
                ? "bg-ink text-white hover:bg-brand"
                : "bg-white text-ink hover:bg-fog"
            }`}
          >
            Book a discovery call
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="z-50 -mr-2 inline-flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-white px-6 pt-24 pb-10 text-ink lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/15 py-4 font-serif text-4xl"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-8 bg-ink px-5 py-4 text-center text-base font-medium text-white"
          >
            Book a discovery call
          </a>
        </div>
      )}
    </header>
  );
}
