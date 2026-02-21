import PrivateLabelSolutions from "../../components/PrivateLabelSolutions";
import FlexiblePackagingSolutions from "../../components/FlexiblePackagingSolutions";
import ProductRange from "../../components/ProductRange";
import ProductionExcellence from "../../components/ProductionExcellence";
import ProductionInAction from "../../components/ProductionInAction";
import WhatWeOffer from "../../components/WhatWeOffer";
import Separator from "../../components/Separator";
import { getDictionary } from "../../i18n";
import type { Locale } from "../../i18n";
import type { Metadata } from "next";

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
      ? "Пакување | Острог Луна - Приватна Етикета и Решенија за Пакување"
      : "Packing | Ostrog Luna - Private Label & Packaging Solutions",
    description: isMk
      ? "Острог Луна нуди решенија за приватна етикета, флексибилно пакување и договорно рафинирање на јадливи масла. Од 750мл малопродажни шишиња до 40ft расфус контејнери."
      : "Ostrog Luna offers private label solutions, flexible packaging, and contract refining for edible oils. From 750ml retail bottles to 40ft bulk containers.",
    alternates: {
      canonical: isMk ? `${BASE_URL}/mk/packing` : `${BASE_URL}/packing`,
      languages: {
        en: `${BASE_URL}/packing`,
        mk: `${BASE_URL}/mk/packing`,
      },
    },
    openGraph: {
      url: isMk ? `${BASE_URL}/mk/packing` : `${BASE_URL}/packing`,
    },
  };
}

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
        pageLabel={dict.packing.privateLabelSolutions.pageLabel}
        label={dict.packing.privateLabelSolutions.label}
        subtitle={dict.packing.privateLabelSolutions.subtitle}
        paragraphs={dict.packing.privateLabelSolutions.paragraphs}
        imageSrc="/private-label-solutions.png"
        imageAlt="Oil bottles with private label branding - Your Brand packaging solutions"
      />

      <Separator />

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

      <Separator />

      <FlexiblePackagingSolutions
        title={dict.packing.flexiblePackagingSolutions.title}
        paragraphs={dict.packing.flexiblePackagingSolutions.paragraphs}
        imageSrc="/flexible-packaging-solutions.png"
        imageAlt="Various oil packaging formats - bottles, containers, and bulk options"
      />

      <Separator />

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

      <Separator />

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

      <Separator />

      <ProductionInAction
        title={dict.packing.productionInAction.title}
        subtitle={dict.packing.productionInAction.subtitle}
        videoSrc="/product-in-action.mp4"
      />
    </div>
  );
}
