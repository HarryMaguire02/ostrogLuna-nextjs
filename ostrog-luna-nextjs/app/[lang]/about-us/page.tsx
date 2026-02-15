import ExpertiseShowcase from "../../components/ExpertiseShowcase";
import OurJourney from "../../components/OurJourney";
import Certifications from "../../components/Certifications";
import { getDictionary } from "../../i18n";
import type { Locale } from "../../i18n";

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
