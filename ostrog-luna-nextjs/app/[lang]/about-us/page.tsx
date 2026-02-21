import type { Metadata } from "next";
import ExpertiseShowcase from "../../components/ExpertiseShowcase";
import OurJourney from "../../components/OurJourney";
import Certifications from "../../components/Certifications";
import Separator from "../../components/Separator";
import { getDictionary } from "../../i18n";
import type { Locale } from "../../i18n";

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
      ? "За Нас | Острог Луна - Нашата Приказна и Сертификати"
      : "About Us | Ostrog Luna - Our Story & Certifications",
    description: isMk
      ? "Дознајте за патувањето, експертизата и меѓународните сертификати на Острог Луна (HACCP, IFS, ISO 22000). 500+ деловни партнери, 50М литри годишно."
      : "Learn about Ostrog Luna's journey, expertise, and certifications (HACCP, IFS, ISO 22000). 500+ business partners, 50M liters of refined sunflower oil annually.",
    alternates: {
      canonical: isMk ? `${BASE_URL}/mk/about-us` : `${BASE_URL}/about-us`,
      languages: {
        en: `${BASE_URL}/about-us`,
        mk: `${BASE_URL}/mk/about-us`,
      },
    },
    openGraph: {
      url: isMk ? `${BASE_URL}/mk/about-us` : `${BASE_URL}/about-us`,
    },
  };
}

export default async function AboutUs({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-20">
      <ExpertiseShowcase
        label={dict.expertise.label}
        title={dict.expertise.title}
        paragraphs={dict.expertise.paragraphs}
        imageSrc="/factory-sunflowers.png"
        imageAlt="Ostrog Luna factory with sunflower fields"
        stats={[
          { value: "500+", label: dict.expertise.stats.businessPartners },
          { value: "20", label: dict.expertise.stats.exportMarkets },
          { value: "50M", label: dict.expertise.stats.litersAnnually },
        ]}
      />

      <Separator />

      <OurJourney
        title={dict.journey.title}
        milestones={[
          {
            title: dict.journey.milestones.ourStart.title,
            description: dict.journey.milestones.ourStart.description,
            imageSrc: "/our-start-journey.png",
            imageAlt: "Factory and sunflower fields - our beginning",
          },
          {
            title: dict.journey.milestones.productionMilestone.title,
            description: dict.journey.milestones.productionMilestone.description,
            imageSrc: "/production-milestiones-journey.png",
            imageAlt: "Biser oil bottles - production milestone",
          },
          {
            title: dict.journey.milestones.internationalExpansion.title,
            description: dict.journey.milestones.internationalExpansion.description,
            imageSrc: "/international-expansion-journey.png",
            imageAlt: "Transport truck - international expansion",
          },
          {
            title: dict.journey.milestones.modernPackaging.title,
            description: dict.journey.milestones.modernPackaging.description,
            imageSrc: "/modern-packing-journey.png",
            imageAlt: "Modern packaging line",
          },
        ]}
      />

      <Separator />

      <Certifications
        title={dict.certifications.title}
        description={dict.certifications.description}
        certificates={[
          {
            imageSrc: "/HACCP-certificate.png",
            imageAlt: "HACCP - Hazard Analysis Critical Control Point certification",
            label: dict.certifications.certificates.haccp,
          },
          {
            imageSrc: "/IFS-certificate.png",
            imageAlt: "IFS Food - International Featured Standards certification",
            label: dict.certifications.certificates.ifs,
          },
          {
            imageSrc: "/ISO-certificate.png",
            imageAlt: "ISO 22000:2018 - Food Safety Management System certification",
            label: dict.certifications.certificates.iso,
          },
        ]}
        buttonLabel={dict.certifications.button}
      />
    </div>
  );
}
