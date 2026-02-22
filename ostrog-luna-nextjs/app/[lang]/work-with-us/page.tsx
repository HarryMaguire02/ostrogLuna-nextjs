import type { Metadata } from "next";
import WorkWithUsHero from "../../components/WorkWithUsHero";
import TrustedPartners from "../../components/TrustedPartners";
import WhyChooseUs from "../../components/WhyChooseUs";
import ExperienceAndScale from "../../components/ExperienceAndScale";
import SimpleCooperation from "../../components/SimpleCooperation";
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
      ? "Соработувај со нас | Острог Луна - Приватни Ознаки и Расфусно Масло"
      : "Work With Us | Ostrog Luna - Private Label & Bulk Oil Solutions",
    description: isMk
      ? "Соработувајте со Острог Луна за приватни ознаки, расфусно масло и флексибилно пакување. Над 27 години искуство, 87 извозни пазари."
      : "Partner with Ostrog Luna for private label, bulk oil and flexible packaging solutions. 27+ years experience, 87 export markets.",
    alternates: {
      canonical: isMk
        ? `${BASE_URL}/mk/work-with-us`
        : `${BASE_URL}/work-with-us`,
      languages: {
        en: `${BASE_URL}/work-with-us`,
        mk: `${BASE_URL}/mk/work-with-us`,
      },
    },
    openGraph: {
      url: isMk
        ? `${BASE_URL}/mk/work-with-us`
        : `${BASE_URL}/work-with-us`,
    },
  };
}

export default async function WorkWithUs({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const d = dict.workWithUs;

  return (
    <div className="pt-20">
      <WorkWithUsHero
        label={d.hero.label}
        title={d.hero.title}
        paragraph={d.hero.paragraph}
        ctaLabel={d.hero.cta}
        imageSrc="/flexible-packaging-solutions.png"
        imageAlt="Oil bottles on production line"
        lang={lang}
      />

      <Separator />

      <TrustedPartners
        title={d.trustedPartners.title}
        paragraphs={d.trustedPartners.paragraphs}
        partners={[
          { imageSrc: "/partner-lidl.png", imageAlt: "Lidl" },
        ]}
      />

      <Separator />

      <WhyChooseUs
        title={d.whyChooseUs.title}
        features={[
          {
            iconSrc: "/offer-factory.png",
            iconAlt: "Factory icon",
            title: d.whyChooseUs.features.production.title,
            description: d.whyChooseUs.features.production.description,
          },
          {
            iconSrc: "/offer-label.png",
            iconAlt: "Label icon",
            title: d.whyChooseUs.features.privateLabel.title,
            description: d.whyChooseUs.features.privateLabel.description,
          },
          {
            iconSrc: "/icon-globe.png",
            iconAlt: "Globe icon",
            title: d.whyChooseUs.features.international.title,
            description: d.whyChooseUs.features.international.description,
          },
          {
            iconSrc: "/offer-package.png",
            iconAlt: "Package icon",
            title: d.whyChooseUs.features.packaging.title,
            description: d.whyChooseUs.features.packaging.description,
          },
        ]}
        imageSrc="/work-trucks.png"
        imageAlt="Ostrog Luna Biser branded fleet trucks"
      />

      <Separator />

      <ExperienceAndScale
        title={d.experienceAndScale.title}
        stats={[
          { value: d.experienceAndScale.stats.years.value,         label: d.experienceAndScale.stats.years.label },
          { value: d.experienceAndScale.stats.exportMarkets.value, label: d.experienceAndScale.stats.exportMarkets.label },
          { value: d.experienceAndScale.stats.tonsProduced.value,  label: d.experienceAndScale.stats.tonsProduced.label },
          { value: d.experienceAndScale.stats.privateLabel.value,  label: d.experienceAndScale.stats.privateLabel.label },
        ]}
      />

      <Separator />

      <SimpleCooperation
        title={d.simpleCooperation.title}
        steps={[
          { title: d.simpleCooperation.steps.inquiry.title,    description: d.simpleCooperation.steps.inquiry.description },
          { title: d.simpleCooperation.steps.offer.title,      description: d.simpleCooperation.steps.offer.description },
          { title: d.simpleCooperation.steps.production.title, description: d.simpleCooperation.steps.production.description },
          { title: d.simpleCooperation.steps.delivery.title,   description: d.simpleCooperation.steps.delivery.description },
        ]}
        ctaLabel={d.simpleCooperation.cta}
        lang={lang}
      />
    </div>
  );
}
