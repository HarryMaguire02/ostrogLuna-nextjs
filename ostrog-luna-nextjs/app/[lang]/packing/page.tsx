import PrivateLabelSolutions from "../../components/PrivateLabelSolutions";
import FlexiblePackagingSolutions from "../../components/FlexiblePackagingSolutions";
import WhatWeOffer from "../../components/WhatWeOffer";
import { getDictionary } from "../../i18n";
import type { Locale } from "../../i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packing | OstrogLuna - Private Label & Packaging Solutions",
  description:
    "OstrogLuna offers private label solutions, flexible packaging options, and contract refining services for edible oils. From retail bottles to bulk shipments.",
};

export default async function Packing({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-20">
      <PrivateLabelSolutions
        label={dict.packing.privateLabelSolutions.label}
        subtitle={dict.packing.privateLabelSolutions.subtitle}
        paragraphs={dict.packing.privateLabelSolutions.paragraphs}
        imageSrc="/private-label-solutions.png"
        imageAlt="Oil bottles with private label branding - Your Brand packaging solutions"
      />

      <WhatWeOffer
        title={dict.packing.whatWeOffer.title}
        subtitle={dict.packing.whatWeOffer.subtitle}
        items={[
          {
            iconSrc: "/offer-factory.png",
            iconAlt: "Factory icon - production and packaging",
            text: dict.packing.whatWeOffer.items.production,
          },
          {
            iconSrc: "/offer-package.png",
            iconAlt: "Package icon - customized packaging formats",
            text: dict.packing.whatWeOffer.items.packaging,
          },
          {
            iconSrc: "/offer-label.png",
            iconAlt: "Label icon - market-adapted labeling",
            text: dict.packing.whatWeOffer.items.labeling,
          },
          {
            iconSrc: "/offer-shield.png",
            iconAlt: "Shield icon - quality control",
            text: dict.packing.whatWeOffer.items.quality,
          },
        ]}
      />

      <FlexiblePackagingSolutions
        title={dict.packing.flexiblePackagingSolutions.title}
        paragraphs={dict.packing.flexiblePackagingSolutions.paragraphs}
        imageSrc="/flexible-packaging-solutions.png"
        imageAlt="Various oil packaging formats - bottles, containers, and bulk options"
      />
    </div>
  );
}
