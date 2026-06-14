import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aplaceinparis.com"),
  title: {
    default: "A Place in Paris — Apartment Finding for Americans",
    template: "%s · A Place in Paris",
  },
  description:
    "A boutique apartment-finding service helping US citizens find the right home in Paris — neighborhood matching, listing search, viewings, and the French rental paperwork, handled personally.",
  keywords: [
    "find apartment Paris",
    "Paris apartment search",
    "American expat Paris apartment",
    "Paris apartment finder for foreigners",
    "rent apartment Paris US citizen",
  ],
  openGraph: {
    title: "A Place in Paris — Apartment Finding for Americans",
    description:
      "I help US citizens find the right apartment in Paris — from narrowing neighborhoods to signing the lease, the hunt handled for you.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
