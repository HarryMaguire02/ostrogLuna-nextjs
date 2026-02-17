import PrivateLabelSolutions from "../../components/PrivateLabelSolutions";
import FlexiblePackagingSolutions from "../../components/FlexiblePackagingSolutions";
import ProductRange from "../../components/ProductRange";
import ProductionExcellence from "../../components/ProductionExcellence";
import ProductionInAction from "../../components/ProductionInAction";
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

      <ProductRange
        title={dict.packing.productRange.title}
        subtitle={dict.packing.productRange.subtitle}
        products={[
          {
            imageSrc: "/range-750ml.png",
            imageAlt: "750 mL oil bottle",
            label: dict.packing.productRange.products["750ml"],
          },
          {
            imageSrc: "/range-1L.png",
            imageAlt: "1 liter oil bottle",
            label: dict.packing.productRange.products["1L"],
          },
          {
            imageSrc: "/range-4750ml.png",
            imageAlt: "4750 mL oil container",
            label: dict.packing.productRange.products["4750ml"],
          },
          {
            imageSrc: "/range-5L.png",
            imageAlt: "5 liter oil container",
            label: dict.packing.productRange.products["5L"],
          },
          {
            imageSrc: "/range-10L.png",
            imageAlt: "10 liter oil container",
            label: dict.packing.productRange.products["10L"],
          },
          {
            imageSrc: "/range-40ft.png",
            imageAlt: "40ft shipping container",
            label: dict.packing.productRange.products["40ft"],
          },
          {
            imageSrc: "/range-20ft.png",
            imageAlt: "20ft shipping container",
            label: dict.packing.productRange.products["20ft"],
          },
          {
            imageSrc: "/range-truck.png",
            imageAlt: "Food-grade tanker truck",
            label: dict.packing.productRange.products.truck,
          },
        ]}
      />

      <ProductionExcellence
        title={dict.packing.productionExcellence.title}
        subtitle={dict.packing.productionExcellence.subtitle}
        features={[
          {
            iconSrc: "/production-factory.png",
            iconAlt: "Factory icon - manufacturing technology",
            title: dict.packing.productionExcellence.features.manufacturing.title,
            description: dict.packing.productionExcellence.features.manufacturing.description,
          },
          {
            iconSrc: "/production-drop.png",
            iconAlt: "Oil drop icon - refining process",
            title: dict.packing.productionExcellence.features.refining.title,
            description: dict.packing.productionExcellence.features.refining.description,
          },
          {
            iconSrc: "/production-capacity.png",
            iconAlt: "Warehouse icon - daily capacity",
            title: dict.packing.productionExcellence.features.capacity.title,
            description: dict.packing.productionExcellence.features.capacity.description,
          },
        ]}
      />

      <ProductionInAction
        title={dict.packing.productionInAction.title}
        subtitle={dict.packing.productionInAction.subtitle}
        videoSrc="/product-in-action.mp4"
      />
    </div>
  );
}
