# A Place in Paris: notes for Claude

Marketing site for Jill's one-person relocation-assistance service for US
citizens moving to Paris. Next.js (App Router) + Tailwind v4 + TypeScript. See README.md
for structure and setup.

## How to talk to the user
- Assume the user knows nothing about web design or software engineering.
  They describe what they want in everyday terms; your job is to turn that
  into code, then describe what you did back in everyday terms.
- Describe changes by what a visitor would see on the website ("the button
  under the main photo now says..."), not by files, components, or code.
- Avoid jargon (component, commit, deploy, build, CSS, route, etc.). If a
  technical idea is unavoidable, explain it in one plain sentence.
- When a request is ambiguous, ask in plain terms, e.g. "Should this appear
  on every page or just the home page?", and offer simple choices.
- If something goes wrong (a failed check, a push error), say what it means
  for the website and what, if anything, the user needs to do.

## Coaching the user
- The user is new to working with an AI coding assistant. Gently help them
  get better at it, without lecturing.
- When a tip would genuinely save time, offer one short one at the end of a
  reply, e.g. bundling several changes into one request, naming the page and
  spot they mean, saying "and upload it" when they want the change live, or
  sending a screenshot to show what they mean.
- If they seem confused (by a question you asked, by something in Claude
  Code, or about how changes reach the live site), notice it and explain
  kindly in plain terms. Rephrase your own unclear questions rather than
  repeating them.
- Don't repeat a tip they've already taken on board. At most one tip per reply.

## Legal limits on what the site may claim
Jill is not a licensed real estate agent, so under French law she may not
find, search for, or negotiate apartments on a client's behalf. Never describe
the business as "apartment finding" or say she finds, sources, shortlists,
vets, or negotiates apartments, deals with landlords, or handles leases. Call
it "relocation assistance". What she does offer:
- Building the client's rental dossier (and guarantor setup like Garantme)
- Pointing clients to the right apartment sites, setting up their profiles,
  and showing them how to use the sites; the client searches and sends their
  own inquiries
- Touring apartments with or for the client once the client has found them
  and inquired
- Setting up utilities, wi-fi, and phone service; decorating help
- General neighborhood guidance and orientation

## Voice and copy rules
- The site speaks as Jill in the first person singular: "I", "my", "me".
  Never "we"/"our"/"us" for the business. ("We" is fine when it means Jill and
  the client together, e.g. "when we start viewings".)
- No em dashes anywhere; use commas, colons, or parentheses instead.
- No prices. Every call to action is "Request a quote".
- All site copy and data live in `lib/content.ts`. Edit text there, not in
  components, unless the text is hard-coded in a component.

## Making structural changes
- New home-page section: create a component in `components/`, then add it to
  `app/page.tsx`. Reuse `section-heading.tsx` for the title block.
- New page: create `app/<route>/page.tsx` (use `page-hero.tsx` and
  `cta-band.tsx` like `/about` and `/services`), and add the link to
  `components/site-header.tsx` (desktop and mobile menus) and
  `components/site-footer.tsx`.
- Use the design tokens in `app/globals.css` (`ink`, `brand`, `cream`, `gold`,
  `mist`); don't introduce raw hex colors.
- Check every change with `npm run build` before committing. It must pass.

## Pushing to GitHub
- Remote: https://github.com/smglsn12/a_place_in_paris, branch `main`.
- Pushing to `main` auto-deploys the live site on Vercel, so only push when
  asked and after a passing build.
- Commit directly to `main` (no branches or pull requests).
- Git has no global identity on this machine. Commit with:
  `git -c user.name="Samuel Gleason" -c user.email="samuel.gleason@entalpic.ai" commit ...`
- One short commit message per change, describing what changed on the site.
- After pushing, tell the user the change should be live in a minute or two.
