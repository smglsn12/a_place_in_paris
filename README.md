# A Place in Paris

A modern, responsive marketing site for Jill's boutique **apartment-finding
service** that helps US citizens find a home in Paris. Built with **Next.js
(App Router)**, **Tailwind CSS v4**, and **Lucide React** icons.

## Stack

- **Next.js 15** (App Router, React 19): statically prerendered single-page site
- **Tailwind CSS v4**: design tokens defined in `app/globals.css` via `@theme`
- **Lucide React**: iconography
- **TypeScript**: strict mode
- Google Fonts via `next/font`: Playfair Display (serif display) + Inter (sans body)

## Design system

Defined as Tailwind theme tokens in `app/globals.css`:

- **Palette**: Parisian midnight blue (`ink`/`brand`), warm ivory (`cream`),
  brass-gold accent (`gold`), with `mist` for muted text.
- **Type**: editorial serif headings paired with a clean sans body.
- **Motion**: a subtle `fade-up` entrance animation.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm start        # serve the production build
```

## Routes

- `/`: home (hero, services overview, process, packages, testimonials, FAQ, contact form)
- `/services`: detailed breakdown of each apartment-finding service, plus the packages
- `/about`: Jill's bio and photo, values, and stats
- `/api/contact`: POST endpoint (Route Handler) that delivers the contact form

## Structure

```
app/
  layout.tsx          Root layout: fonts, SEO, shared header + footer
  page.tsx            Home page sections
  services/page.tsx   Detailed services route
  about/page.tsx      About route
  api/contact/route.ts  Contact form Route Handler
  globals.css         Tailwind import + @theme design tokens
components/
  site-header.tsx     Sticky, scroll-aware nav with mobile menu
  hero.tsx            Hero + stat card (inline SVG skyline)
  services.tsx        Six service cards (home overview)
  process.tsx         Four-step "how it works" band
  packages.tsx        Three service packages (quote-based)
  testimonials.tsx    Client quotes
  faq.tsx             Accordion (client component)
  contact.tsx         Discovery-call form (posts to /api/contact)
  cta-band.tsx        Reusable call-to-action band for sub-pages
  page-hero.tsx       Reusable title band for sub-pages
  site-footer.tsx     Footer
  logo.tsx            Wordmark + mark
  section-heading.tsx Shared eyebrow/title/description block
lib/
  content.ts          All site copy & data (services, packages, FAQs, values…)
```

## Contact form

The form posts JSON to `/api/contact` (`app/api/contact/route.ts`), which validates
the input and forwards it to an email provider.

- **Default provider: Web3Forms** (free, no domain verification). Get an access key
  at [web3forms.com](https://web3forms.com) tied to your inbox, then set
  `WEB3FORMS_ACCESS_KEY` (see `.env.example`).
- **Demo mode:** until the key is set, submissions are validated and logged to the
  server console (the form still shows its success state) so nothing breaks locally.
- **Switching to Resend or Formspree:** the handler has a commented block at the
  bottom showing the swap.

```bash
cp .env.example .env.local   # then paste your WEB3FORMS_ACCESS_KEY
```

## Deploy to Vercel

This is a standard Next.js App Router app: zero config on Vercel.

1. Push the repo to GitHub/GitLab/Bitbucket.
2. In [vercel.com](https://vercel.com) → **Add New → Project**, import the repo.
   Vercel auto-detects Next.js (build `next build`, output handled automatically).
3. Under **Environment Variables**, add `WEB3FORMS_ACCESS_KEY` with your key.
4. **Deploy.** Add your custom domain under Project → Settings → Domains.

Or from the CLI:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

## Notes

- Site copy lives in `lib/content.ts`: edit there to update services, packages,
  testimonials, FAQs, and values without touching markup.
- Package contents are illustrative; confirm they match your real offering, and
  set pricing via the "Request a quote" flow, before launch.
