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

  return (
    <div className="pt-20">
      <ContactHero dict={dict.contactUs} />
      <Separator/>
      <ContactInformation dict={dict.contactUs.contactInformation} />
      <Separator/>
      <ContactFacility dict={dict.contactUs.facility} />
    </div>
  );
}
