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

## Structure

```
app/
  layout.tsx          Root layout: fonts, SEO, shared header + footer
  page.tsx            Home page sections
  services/page.tsx   Detailed services route
  about/page.tsx      About route
  globals.css         Tailwind import + @theme design tokens
components/
  site-header.tsx     Sticky, scroll-aware nav with mobile menu
  hero.tsx            Hero + stat card (inline SVG skyline)
  services.tsx        Six service cards (home overview)
  process.tsx         Four-step "how it works" band
  packages.tsx        Three service packages (quote-based)
  testimonials.tsx    Client quotes
  faq.tsx             Accordion (client component)
  contact.tsx         Discovery-call form (submits to Web3Forms)
  cta-band.tsx        Reusable call-to-action band for sub-pages
  page-hero.tsx       Reusable title band for sub-pages
  site-footer.tsx     Footer
  logo.tsx            Wordmark + mark
  section-heading.tsx Shared eyebrow/title/description block
lib/
  content.ts          All site copy & data (services, packages, FAQs, values…)
```

## Contact form

The form (`components/contact.tsx`) submits **directly from the visitor's browser**
to [Web3Forms](https://web3forms.com), which emails each submission to
**jillfindsyourparisapt@gmail.com**.

- The Web3Forms **access key is public by design** and lives in `contact.tsx`
  (`WEB3FORMS_ACCESS_KEY`). To change the destination inbox or rotate the key,
  create a new one at [web3forms.com](https://web3forms.com) and replace it there.
- Submitting client-side (rather than through a server route) is the standard
  Web3Forms pattern, and it avoids Cloudflare blocking server-to-server calls from
  datacenter IPs.
- A hidden honeypot field filters basic spam bots.
- If a submission fails, the form shows an error pointing visitors to email Jill
  directly.

## Deploy to Vercel

This is a standard Next.js App Router app: zero config on Vercel.

1. Push the repo to GitHub/GitLab/Bitbucket.
2. In [vercel.com](https://vercel.com) → **Add New → Project**, import the repo.
   Vercel auto-detects Next.js (build `next build`, output handled automatically).
3. **Deploy.** Add your custom domain under Project → Settings → Domains.

No environment variables are required: the contact form's Web3Forms key lives in
the client code.

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
