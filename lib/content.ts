import {
  Compass,
  Laptop,
  Video,
  FileCheck2,
  ShieldCheck,
  Wifi,
  Sofa,
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
    title: "Neighborhood Guidance",
    description:
      "The right arrondissement changes everything. I help you figure out where in Paris you'll actually feel at home.",
    detail:
      "Before you look at a single listing, it pays to know where you belong. I learn how you want to live (quiet or buzzing, close to work, near green space, family-friendly) and help you translate that into the arrondissements worth focusing on, with an honest read on what each costs.",
    points: [
      "Lifestyle & budget consultation",
      "Arrondissements to focus on",
      "Commute & daily-life mapping",
    ],
  },
  {
    icon: FileCheck2,
    title: "Rental Dossier & Guarantor",
    description:
      "Paris rentals go to whoever has the strongest dossier ready first. I help you build yours before you start searching.",
    detail:
      "A complete, correctly formatted dossier de location is what landlords expect here, and it trips up almost every newcomer. I help you gather and present every document so yours stands out. No French guarantor or French income? I help you set up a guarantor service like Garantme so a thin French credit history doesn't hold you back.",
    points: [
      "Dossier de location preparation",
      "Guarantor service setup (e.g. Garantme)",
      "Renter's insurance guidance",
    ],
  },
  {
    icon: Laptop,
    title: "Apartment Search Coaching",
    description:
      "French apartment sites can be confusing. I show you where to look and how to use each site like a local.",
    detail:
      "Paris apartments are spread across many French websites, each with its own quirks. I point you to the right ones for your budget and situation, help you set up your profiles, and walk you through how to search, save alerts, and send inquiries yourself, so you can move quickly when the right place appears.",
    points: [
      "The right sites for your search",
      "Profile setup, side by side",
      "How to search & send inquiries",
    ],
  },
  {
    icon: Video,
    title: "Apartment Tours",
    description:
      "Found a place you love but can't be in Paris yet? I can tour it for you, or go with you.",
    detail:
      "Once you've found apartments you're interested in and sent your inquiries, I attend the viewings, either alongside you or on your behalf with a live video walkthrough. You get the honest take: the noisy street, the sixth-floor walk-up, the kitchen that's smaller than the photos suggest.",
    points: [
      "Tours with you or for you",
      "Live video walkthroughs",
      "Honest feedback & red flags",
    ],
  },
  {
    icon: Wifi,
    title: "Utilities, Wi-Fi & Phone",
    description:
      "Lights on, wi-fi working, French phone number ready. I help you get connected without the headache.",
    detail:
      "Setting up services in France means French-language forms, unfamiliar providers, and plenty of waiting. I help you choose and set up electricity and gas, home internet and wi-fi, and a French mobile phone plan, so your new place is ready to live in from day one.",
    points: [
      "Electricity & gas setup",
      "Internet & wi-fi setup",
      "French mobile phone plan",
    ],
  },
  {
    icon: Sofa,
    title: "Decorating & Settling In",
    description:
      "An empty apartment isn't a home yet. I can help you furnish and decorate so it truly feels like yours.",
    detail:
      "From finding the right furniture shops and flea markets to pulling a look together, I help you turn a bare Paris apartment into a place you love coming home to, and show you around your new neighborhood along the way.",
    points: [
      "Furnishing & decorating help",
      "Favorite shops & flea markets",
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
    title: "Get search-ready",
    description:
      "I help you build your rental dossier, point you to the right apartment sites, and set up your profiles with you.",
  },
  {
    number: "03",
    title: "You search, I tour",
    description:
      "You choose the apartments you love and send your inquiries. I go to the viewings with you, or for you on live video.",
  },
  {
    number: "04",
    title: "Settle in",
    description:
      "Once you have your keys, I help set up your utilities, wi-fi, and phone, and can even help you decorate.",
  },
];

export type Package = {
  name: string;
  tagline: string;
  features: string[];
  featured?: boolean;
};

export const PACKAGES: Package[] = [
  {
    name: "Search Ready",
    tagline: "Everything you need to search confidently on your own",
    features: [
      "Neighborhood & budget consultation",
      "Rental dossier preparation",
      "Guarantor service setup",
      "The right apartment sites for you",
      "Profile setup & site walkthroughs",
      "Email support for 30 days",
    ],
  },
  {
    name: "Search Companion",
    tagline: "My signature support, from dossier to viewings",
    featured: true,
    features: [
      "Everything in Search Ready",
      "Ongoing coaching while you search",
      "Apartment tours, with you or for you",
      "Live video walkthroughs",
      "Honest feedback after every viewing",
    ],
  },
  {
    name: "Relocate & Settle",
    tagline: "Full support, all the way to feeling at home",
    features: [
      "Everything in Search Companion",
      "Electricity & gas setup",
      "Internet & wi-fi setup",
      "French mobile phone plan",
      "Decorating & furnishing help",
      "Neighborhood orientation",
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
    question: "Do you find apartments for me?",
    answer:
      "No. In France, searching for apartments on someone's behalf is reserved for licensed real estate agents, and I'm not one. Instead, I make sure you're ready to land the apartment you find: a strong dossier, the right sites, your profiles set up, and me at the viewings with you or for you.",
  },
  {
    question: "Do I need to be in Paris to start?",
    answer:
      "Not at all. Most of my clients are still in the US when we begin. We build your dossier and set up your apartment-site profiles remotely, and once you've found places you like, I can tour them for you over live video.",
  },
  {
    question: "How long does an apartment search usually take?",
    answer:
      "It depends on your budget and must-haves, but searches often take a few weeks once viewings begin. Paris moves fast; having your dossier ready before you start is what makes the difference.",
  },
  {
    question: "I don't have a French guarantor or French income. Can you still help?",
    answer:
      "Yes, and it's the single most common worry I hear. I help you set up a guarantor service like Garantme so a thin French credit history doesn't sink your application.",
  },
  {
    question: "What help do you offer once I've signed a lease?",
    answer:
      "Plenty. I help you set up electricity and gas, home internet and wi-fi, and a French phone plan, and I can help you furnish and decorate so your apartment feels like home.",
  },
  {
    question: "Do you help with visas or immigration?",
    answer:
      "No, I focus on helping you get set up in Paris. If you need visa help, I'm happy to point you toward trusted resources for that side of the move.",
  },
  {
    question: "Are your fees on top of other costs?",
    answer:
      "Yes. My fee covers my coaching, tours, and setup help. Third-party costs (your security deposit, any agency fees, guarantor service fees, renter's insurance) are separate, and I'm transparent about them up front.",
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
      "The Paris rental market is opaque and fast. My job is to turn it into a calm, ordered plan you actually understand.",
  },
  {
    icon: ShieldCheck,
    title: "Honest by default",
    description:
      "Straight answers about budgets, neighborhoods, and red flags, even when the honest answer is 'skip this one' or 'wait for something better.'",
  },
  {
    icon: Languages,
    title: "I speak both worlds",
    description:
      "American expectations meet the French system. I translate the websites, the paperwork, and the unspoken rules.",
  },
  {
    icon: HeartHandshake,
    title: "One client at a time",
    description:
      "This is a personal service, not a volume business. You get my full attention, and I'm reachable long after you've got the keys.",
  },
];

export const ABOUT_STATS = [
  { value: "2", label: "Clients helped" },
  { value: "100%", label: "Settled in" },
  { value: "1.5 yrs", label: "Living in Paris" },
  { value: "1:1", label: "Personal attention" },
];
