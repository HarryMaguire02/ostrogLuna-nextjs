import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
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
    locale: "en_US",
    siteName: "Ostrog Luna",
    title: "Ostrog Luna - Premium Sunflower Oil Producer",
    description:
      "Leading producer of high-quality refined sunflower oil with 500+ business partners and exports to 20+ markets.",
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
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
