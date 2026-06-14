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
    default: "A Place in Paris — Relocation Concierge for Americans",
    template: "%s · A Place in Paris",
  },
  description:
    "A boutique relocation service helping US citizens move to Paris with confidence — visas, housing, banking, healthcare, and the everyday details of settling in.",
  keywords: [
    "move to Paris",
    "relocate to France",
    "American expat Paris",
    "French long-stay visa",
    "Paris relocation service",
  ],
  openGraph: {
    title: "A Place in Paris — Relocation Concierge for Americans",
    description:
      "From your first visa appointment to your first café au lait as a local — we handle the move so you can savor the arrival.",
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
