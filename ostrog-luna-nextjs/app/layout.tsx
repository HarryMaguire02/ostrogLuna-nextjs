import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://ostrogluna.com"),
  title: {
    default: "Ostrog Luna - Premium Sunflower Oil Producer",
    template: "%s | Ostrog Luna",
  },
  description:
    "Ostrog Luna is a leading producer of high-quality refined sunflower oil. We offer contract refining, packaging services, and export to 20+ markets worldwide.",
  keywords: [
    "sunflower oil",
    "edible oil",
    "oil refinery",
    "Biser oil",
    "North Macedonia",
    "oil packaging",
    "contract refining",
  ],
  authors: [{ name: "Ostrog Luna" }],
  openGraph: {
    type: "website",
    siteName: "Ostrog Luna",
    title: "Ostrog Luna - Premium Sunflower Oil Producer",
    description:
      "Leading producer of high-quality refined sunflower oil with 500+ business partners and exports to 20+ markets.",
    // TODO: Add og:image once designer provides the asset (1200x630px)
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
