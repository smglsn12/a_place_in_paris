import {
  Compass,
  Search,
  Video,
  FileCheck2,
  ShieldCheck,
  KeyRound,
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
    icon: Compass,
    title: "Neighborhood Matching",
    description:
      "The right arrondissement changes everything. I start by finding where in Paris you'll actually feel at home.",
    detail:
      "Before we look at a single listing, we figure out where you belong. I learn how you want to live — quiet or buzzing, close to work, near green space, family-friendly — and translate that into the right arrondissements and pockets within them, with an honest read on what each costs.",
    points: [
      "Lifestyle & budget consultation",
      "Arrondissement shortlist",
      "Commute & daily-life mapping",
    ],
  },
  {
    icon: Search,
    title: "Apartment Search",
    description:
      "I scour the French listing sites, agencies, and word-of-mouth leads so you're not refreshing SeLoger at 2am.",
    detail:
      "Paris apartments rarely sit on one tidy website, and the best ones move fast. I watch the French portals, work my agency contacts, and chase off-market leads — then send you a curated shortlist of places actually worth your time, not a firehose of listings.",
    points: [
      "Curated, vetted listings",
      "French-site & agency search",
      "Off-market & word-of-mouth leads",
    ],
  },
  {
    icon: Video,
    title: "Viewings & Tours",
    description:
      "Can't be in Paris yet? I tour apartments in person and walk you through them on live video.",
    detail:
      "Most of my clients are still in the US when we start. I visit apartments on your behalf, walk you through them on a live video call, and give you the honest take an agent never will — the noisy street, the sixth-floor walk-up, the kitchen that's smaller than the photos suggest.",
    points: [
      "In-person visits on your behalf",
      "Live video walkthroughs",
      "Honest assessments & red flags",
    ],
  },
  {
    icon: FileCheck2,
    title: "Application & Lease",
    description:
      "Paris rentals go to whoever has the strongest dossier ready first. I build yours and handle the French paperwork.",
    detail:
      "A complete, correctly-formatted dossier de location is what wins apartments here — and it trips up almost every newcomer. I assemble and present yours so it stands out, review the lease with you in plain English, and support your offer and any negotiation.",
    points: [
      "Dossier de location prep",
      "Lease review in plain English",
      "Offer & negotiation support",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Guarantor Solutions",
    description:
      "No French income or guarantor yet? It's the number-one thing that blocks newcomers — and it's solvable.",
    detail:
      "Landlords almost always ask for a French guarantor, which most arrivals don't have. I set you up with solutions like Garantme, point you toward newcomer-friendly landlords, and make sure a thin French credit history doesn't quietly sink an otherwise perfect application.",
    points: [
      "Garantme & guarantor setup",
      "Newcomer-friendly landlords",
      "Deposit & insurance guidance",
    ],
  },
  {
    icon: KeyRound,
    title: "Move-In Support",
    description:
      "Keys in hand is the goal — but the first week matters too. I help you actually settle in.",
    detail:
      "Signing the lease isn't quite the finish line. I help you through the move-in inventory (état des lieux) so you're not blamed for someone else's scuffs, get your utilities and internet switched on, and orient you to your new neighborhood so it feels like home from day one.",
    points: [
      "Utilities & internet setup",
      "Move-in inventory (état des lieux)",
      "Neighborhood orientation",
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
      "A free 30-minute chat about your budget, must-haves, timeline, and what a good life in Paris looks like for you.",
  },
  {
    number: "02",
    title: "Your search plan",
    description:
      "I narrow the neighborhoods, set a realistic budget, and start building a shortlist of apartments genuinely worth your time.",
  },
  {
    number: "03",
    title: "Viewings & applications",
    description:
      "I tour and vet apartments, flag the duds, and prepare your rental dossier so we can pounce the moment the right place appears.",
  },
  {
    number: "04",
    title: "Keys & move-in",
    description:
      "Lease signed, deposit sorted, keys in hand. I help you through the état des lieux and getting settled in your first week.",
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
    name: "Search Starter",
    tagline: "Guidance for the confident DIY hunter",
    price: "$390",
    cadence: "one-time",
    features: [
      "Neighborhood & budget consultation",
      "Personalized search strategy",
      "Curated starter list of listings",
      "Two 45-minute advisory calls",
      "Email support for 30 days",
    ],
  },
  {
    name: "Full Search",
    tagline: "My signature, end-to-end apartment hunt",
    price: "$1,490",
    cadence: "until you sign",
    featured: true,
    features: [
      "Everything in Search Starter",
      "Ongoing curated listing search",
      "In-person viewings & video tours",
      "Rental dossier preparation",
      "Offer & lease negotiation",
      "Support all the way through signing",
    ],
  },
  {
    name: "Search & Settle",
    tagline: "The full hunt plus a smooth landing",
    price: "Custom",
    cadence: "tailored",
    features: [
      "Everything in Full Search",
      "Guarantor & insurance setup",
      "Utilities & internet coordination",
      "Move-in (état des lieux) support",
      "Neighborhood orientation",
      "30 days of post-move support",
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
      "Jill is truly the best. She found one of the best apartments in Paris (imho) within my budget and in an amazing location! All I had to do was quickly discuss with her what I was looking for and my constraints and she took care of the rest. 100% recommend!!",
    name: "Samuel Gleason",
    detail: "Former client",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const FAQS: Faq[] = [
  {
    question: "Do I need to be in Paris to start the search?",
    answer:
      "Not at all. Most of my clients are still in the US when we begin. I tour apartments in person and walk you through them over live video, so you can search Paris without leaving home.",
  },
  {
    question: "How long does it take to find an apartment?",
    answer:
      "It depends on your budget and must-haves, but most searches run a few weeks once we start viewings. Paris moves fast — having your dossier ready in advance is what actually wins apartments.",
  },
  {
    question: "I don't have a French guarantor or French income — can you still help?",
    answer:
      "Yes, and it's the single most common worry I hear. We use solutions like Garantme and target newcomer-friendly landlords so a thin French credit history doesn't sink your application.",
  },
  {
    question: "Do you handle the lease and paperwork?",
    answer:
      "I do. I prepare your dossier de location, review the lease with you in plain English, and support you through signing and the move-in inventory (état des lieux).",
  },
  {
    question: "Do you help with visas or immigration?",
    answer:
      "No — I focus exclusively on finding you the right apartment, which is a craft of its own. If you need visa help, I'm happy to point you toward trusted resources for that side of the move.",
  },
  {
    question: "Are your fees on top of other costs?",
    answer:
      "Yes. My fee covers the apartment search and paperwork support. Third-party costs — your security deposit, any agency fees, renter's insurance — are separate, and I'm transparent about them up front.",
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
      "The Paris rental market is opaque and fast. My job is to turn it into a clear shortlist and a calm, ordered plan you actually understand.",
  },
  {
    icon: ShieldCheck,
    title: "Honest by default",
    description:
      "Straight answers about budgets, neighborhoods, and red flags — even when the honest answer is 'skip this one' or 'wait for something better.'",
  },
  {
    icon: Languages,
    title: "I speak both worlds",
    description:
      "American expectations meet the French rental system. I translate the listings, the paperwork, and the unspoken rules.",
  },
  {
    icon: HeartHandshake,
    title: "One client at a time",
    description:
      "This is a personal service, not a volume business. You get my full attention, and I'm reachable long after you've got the keys.",
  },
];

export const ABOUT_STATS = [
  { value: "2", label: "Clients placed" },
  { value: "100%", label: "Successfully housed" },
  { value: "1.5 yrs", label: "Living in Paris" },
  { value: "1:1", label: "Personal attention" },
];
