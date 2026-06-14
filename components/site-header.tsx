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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-4">
        <a href="/" className="z-50" aria-label="A Place in Paris, home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Book a discovery call
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="z-50 -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-cream px-6 pt-24 pb-10 md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-4 font-serif text-2xl text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-8 rounded-full bg-ink px-5 py-3.5 text-center text-base font-semibold text-cream"
          >
            Book a discovery call
          </a>
        </div>
      )}
    </header>
  );
}
