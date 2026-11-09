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
    default: "A Place in Paris: Relocation Assistance for Americans",
    template: "%s · A Place in Paris",
  },
  description:
    "A boutique relocation service helping US citizens settle into Paris: rental dossier prep, apartment-search coaching, apartment tours, utilities and phone setup, and decorating, all handled personally.",
  keywords: [
    "relocation assistance Paris",
    "move to Paris from the US",
    "American expat Paris relocation",
    "Paris rental dossier help",
    "Paris relocation services for Americans",
  ],
  openGraph: {
    title: "A Place in Paris: Relocation Assistance for Americans",
    description:
      "I help US citizens settle into life in Paris: from your rental dossier and apartment search coaching to tours, utilities, and decorating.",
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
