import ScrollHeader from "../components/ScrollHeader";
import Footer from "../components/Footer";
import { getDictionary, locales } from "../i18n";
import type { Locale } from "../i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className="antialiased bg-white">
        <ScrollHeader lang={lang} dict={dict} />
        <main>{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
