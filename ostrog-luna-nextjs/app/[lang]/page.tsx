import type { Metadata } from "next";
import Container from "../components/Container";
import { getDictionary } from "../i18n";
import type { Locale } from "../i18n";

const BASE_URL = process.env.SITE_URL ?? "https://ostrogluna.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isMk = lang === "mk";

  return {
    title: isMk
      ? "Острог Луна - Производител на Сончогледово Масло"
      : "Ostrog Luna - Premium Sunflower Oil Producer",
    description: isMk
      ? "Острог Луна е водечки производител на висококвалитетно рафинирано сончогледово масло. Нудиме договорно рафинирање, услуги за пакување и извоз на 20+ пазари."
      : "Ostrog Luna is a leading producer of high-quality refined sunflower oil. We offer contract refining, packaging services, and export to 20+ markets worldwide.",
    alternates: {
      canonical: isMk ? `${BASE_URL}/mk` : BASE_URL,
      languages: {
        en: BASE_URL,
        mk: `${BASE_URL}/mk`,
      },
    },
    openGraph: {
      url: isMk ? `${BASE_URL}/mk` : BASE_URL,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ostrog Luna",
    url: BASE_URL,
    logo: `${BASE_URL}/ostrog-luna-logo.png`,
    description:
      "Leading producer of high-quality refined sunflower oil with 500+ business partners and exports to 20+ markets worldwide.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Atanas Mucev no.2",
      addressLocality: "Strumica",
      postalCode: "2400",
      addressCountry: "MK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+38934346611",
      contactType: "customer service",
      email: "info@ostrogluna.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="pt-20 min-h-screen">
        <Container className="py-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {dict.home.welcome}
          </h1>
          <p className="text-lg text-gray-600">{dict.home.subtitle}</p>
        </Container>
      </div>
    </>
  );
}
