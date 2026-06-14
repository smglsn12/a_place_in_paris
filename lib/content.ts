import {
  FileCheck2,
  Home,
  Landmark,
  HeartPulse,
  GraduationCap,
  Croissant,
  Compass,
  ShieldCheck,
  Languages,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/#process", label: "How it works" },
  { href: "/#packages", label: "Packages" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    icon: FileCheck2,
    title: "Visas & Immigration",
    description:
      "Long-stay visitor, talent passport, or self-employed — we map the right path and prepare every form.",
    detail:
      "France offers more than a dozen long-stay visa routes, and choosing the wrong one is the most common reason applications stall. We assess your work, income, and goals, recommend the right category, then assemble and translate a consulate-ready dossier — and coach you through the appointment itself.",
    points: [
      "Visa strategy & eligibility review",
      "Dossier preparation & translation",
      "Consulate appointment coaching",
    ],
  },
  {
    icon: Home,
    title: "Home Search",
    description:
      "Apartment hunting in a market that rewards locals. We negotiate, verify, and tour on your behalf.",
    detail:
      "Paris rentals move fast and favor applicants who already understand the system. We translate your budget and lifestyle into the right arrondissements, screen listings, tour in person or on video, and handle the dossier de location — including guarantor solutions like Garantme for newcomers without French income history.",
    points: [
      "Neighborhood matching to your life",
      "Vetted listings & virtual tours",
      "Lease review & guarantor solutions",
    ],
  },
  {
    icon: Landmark,
    title: "Banking & Admin",
    description:
      "The paperwork that makes France work — opened, filed, and explained in plain English.",
    detail:
      "A French bank account, a numéro fiscal, and your residence permit unlock everything else — but each has its own quirks and queues. We open accounts with newcomer-friendly banks, register you with the tax and social-security systems, and manage your OFII validation so nothing falls through the cracks.",
    points: [
      "French bank account & RIB setup",
      "Social security & tax number (numéro fiscal)",
      "OFII validation & residence permit",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Enroll in one of the world's best health systems and find English-speaking doctors near you.",
    detail:
      "Once you're a resident, France's Assurance Maladie covers the bulk of your healthcare — and a modest mutuelle tops up the rest. We handle your enrollment, help you choose the right top-up plan, and connect you with English-speaking GPs, specialists, and pharmacies in your neighborhood.",
    points: [
      "Assurance maladie enrollment",
      "Private top-up (mutuelle) guidance",
      "English-speaking physician network",
    ],
  },
  {
    icon: GraduationCap,
    title: "Family & Schools",
    description:
      "Bilingual, international, or local public — we find the right fit and handle the enrollment.",
    detail:
      "Whether you want a bilingual école, an international school with an American track, or full immersion in the French public system, we match your children to the right schools, manage applications and waitlists, and coordinate the dependent visas so the whole family arrives together.",
    points: [
      "School search & application support",
      "Spouse & dependent visa coordination",
      "Childcare and crèche placement",
    ],
  },
  {
    icon: Croissant,
    title: "Settling In",
    description:
      "The unglamorous, essential details — so week one feels like home, not a scavenger hunt.",
    detail:
      "The difference between surviving and settling is the small stuff: a working SIM, home internet, the métro and Vélib' apps, knowing your boulangerie. We set up your utilities and connectivity, orient you to daily life, and introduce you to tutors and a community of fellow expats so Paris feels like home from week one.",
    points: [
      "Phone, internet & utilities setup",
      "Métro, Vélib' & daily-life orientation",
      "French lessons & community intros",
    ],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "A free 30-minute conversation about your timeline, work situation, and what a good life in Paris looks like for you.",
  },
  {
    number: "02",
    title: "Your relocation plan",
    description:
      "We build a personalized roadmap — visa route, budget, neighborhoods, and a week-by-week timeline to your move.",
  },
  {
    number: "03",
    title: "We handle the heavy lifting",
    description:
      "Paperwork, apartment tours, appointments, translations. You approve; we execute and keep everything on track.",
  },
  {
    number: "04",
    title: "Arrival & beyond",
    description:
      "We meet you in Paris, get you set up, and stay on call through your first season as a Parisian.",
  },
];

export type Package = {
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  features: string[];
  featured?: boolean;
};

export const PACKAGES: Package[] = [
  {
    name: "Compass",
    tagline: "Guidance for the confident DIY mover",
    price: "$1,900",
    cadence: "one-time",
    features: [
      "Visa strategy session & checklist",
      "Personalized relocation roadmap",
      "Neighborhood & budget guide",
      "Two 60-minute advisory calls",
      "Email support for 60 days",
    ],
  },
  {
    name: "Concierge",
    tagline: "Our signature, end-to-end relocation",
    price: "$6,500",
    cadence: "full service",
    featured: true,
    features: [
      "Everything in Compass",
      "Full visa dossier preparation",
      "Home search & lease negotiation",
      "Banking, healthcare & admin setup",
      "Arrival day in-person support",
      "90 days of priority support",
    ],
  },
  {
    name: "Famille",
    tagline: "For families and dual-career moves",
    price: "Custom",
    cadence: "tailored",
    features: [
      "Everything in Concierge",
      "School search & enrollment",
      "Spouse & dependent visa coordination",
      "Childcare & pediatric setup",
      "Dedicated relocation lead",
      "6 months of priority support",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We'd been dreaming about Paris for a decade and kept stalling on the visa. They turned a wall of French bureaucracy into a checklist. We landed with an apartment, a bank account, and zero panic.",
    name: "Dana & Marcus R.",
    detail: "Moved from Austin, TX · Talent Passport",
  },
  {
    quote:
      "As a remote worker I had no idea where to even start. My roadmap was ready in a week and every appointment was handled. I sipped my first coffee in the 11th feeling like I belonged.",
    name: "Priya S.",
    detail: "Moved from Seattle, WA · Long-stay visitor visa",
  },
  {
    quote:
      "Relocating with two kids felt impossible until we had a real team. Schools, healthcare, the lot — sorted. They even met us at the airport. Worth every cent.",
    name: "The Coleman Family",
    detail: "Moved from Chicago, IL · Famille package",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const FAQS: Faq[] = [
  {
    question: "Do I need to speak French to move to Paris?",
    answer:
      "No — many of our clients arrive with little or no French. We handle the French-language paperwork and appointments for you, and connect you with tutors so you can build confidence at your own pace.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "Most relocations run three to six months from discovery call to arrival, depending on your visa type and how quickly consulate appointments open. We build your timeline around your target move date.",
  },
  {
    question: "Which visa is right for me?",
    answer:
      "It depends on your work, income, and plans. Remote workers and retirees often use the long-stay visitor visa; entrepreneurs and skilled professionals may qualify for the Talent Passport. Your discovery call includes a personalized recommendation.",
  },
  {
    question: "Can you help if I've already started the process?",
    answer:
      "Absolutely. Plenty of clients come to us mid-move — half-finished dossiers, a rejected application, or just stuck on the apartment search. We'll meet you where you are and pick up the thread.",
  },
  {
    question: "Are your fees in addition to government costs?",
    answer:
      "Yes. Our packages cover our advisory and concierge work. Government fees (visa, residence permit, OFII) and third-party costs like rent deposits are paid separately and we're fully transparent about them up front.",
  },
];

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const VALUES: Value[] = [
  {
    icon: Compass,
    title: "Clarity over chaos",
    description:
      "French bureaucracy is famously opaque. Our job is to turn it into a clear, ordered checklist you actually understand.",
  },
  {
    icon: ShieldCheck,
    title: "Honest by default",
    description:
      "Flat pricing, transparent third-party costs, and straight answers — even when the honest answer is 'wait' or 'not yet'.",
  },
  {
    icon: Languages,
    title: "We speak both worlds",
    description:
      "American expectations meet French administration. We translate the language, the paperwork, and the unspoken rules.",
  },
  {
    icon: HeartHandshake,
    title: "Relationships, not transactions",
    description:
      "Most of our clients come from referrals. We stay reachable long after you've unpacked the last box.",
  },
];

export const ABOUT_STATS = [
  { value: "300+", label: "Families relocated" },
  { value: "98%", label: "Visa approval rate" },
  { value: "12 yrs", label: "On the ground in Paris" },
  { value: "40+", label: "US states served" },
];
