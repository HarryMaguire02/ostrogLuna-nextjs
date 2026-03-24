import type { Metadata } from "next";
import ContactHero from "../../components/ContactHero";
import ContactInformation from "../../components/ContactInformation";
import ContactFacility from "../../components/ContactFacility";
import { getDictionary } from "../../i18n";
import type { Locale } from "../../i18n";
import Separator from "@/app/components/Separator";

const BASE_URL = process.env.SITE_URL ?? "https://ostrogluna.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isMk = lang === "mk";

  return {
    title: isMk ? "Контакт | Острог Луна" : "Contact Us | Ostrog Luna",
    description: isMk
      ? "Контактирајте го тимот на Острог Луна. Пронајдете ги нашите контакт информации, работно време и локација на производствениот погон."
      : "Get in touch with the Ostrog Luna team. Find our contact details, opening hours, and production facility location.",
    alternates: {
      canonical: isMk ? `${BASE_URL}/mk/contact-us` : `${BASE_URL}/contact-us`,
      languages: {
        en: `${BASE_URL}/contact-us`,
        mk: `${BASE_URL}/mk/contact-us`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function ContactUs({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ostrog Luna",
    url: BASE_URL,
    logo: `${BASE_URL}/ostrog-luna-logo.png`,
    telephone: "+38934346611",
    email: "info@ostrogluna.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Atanas Mucev no.2",
      addressLocality: "Strumica",
      postalCode: "2400",
      addressCountry: "MK",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="pt-20">
      <ContactHero dict={dict.contactUs} />
      <Separator/>
      <ContactInformation dict={dict.contactUs.contactInformation} />
      <Separator/>
      <ContactFacility dict={dict.contactUs.facility} />
    </div>
    </>
  );
}
