import BiserOilHero from "../../components/BiserOilHero";
import BiserKeyBenefits from "../../components/BiserKeyBenefits";
import BiserCommercialPacking from "../../components/BiserCommercialPacking";
import BiserGuarantee from "../../components/BiserGuarantee";
import BiserBulkPackaging from "../../components/BiserBulkPackaging";
import { getDictionary } from "../../i18n";
import type { Locale } from "../../i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biser Oil | OstrogLuna - Decades of Trust in Every Drop",
  description:
    "BISER is a high-quality, 100% natural and refined edible sunflower oil with over 27 years of trust on the market. Part of OstrogLuna – Strumica, North Macedonia.",
};

export default async function BiserOil({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-20">
      <BiserOilHero
        label={dict.biserOil.hero.label}
        title={dict.biserOil.hero.title}
        paragraphs={dict.biserOil.hero.paragraphs}
        imageSrc="/biser-hero-v2.png"
        imageAlt="BISER sunflower oil bottles with sunflower field background"
      />

      <BiserKeyBenefits
        title={dict.biserOil.keyBenefits.title}
        items={[
          {
            iconSrc: "/benefits-no-additives.png",
            iconAlt: "No additives icon",
            label: dict.biserOil.keyBenefits.items.noAdditives,
          },
          {
            iconSrc: "/benefits-natural-composition.png",
            iconAlt: "Natural composition icon",
            label: dict.biserOil.keyBenefits.items.naturalComposition,
          },
          {
            iconSrc: "/benefits-vitaminE.png",
            iconAlt: "Vitamin E icon",
            label: dict.biserOil.keyBenefits.items.vitaminE,
          },
          {
            iconSrc: "/benefits-protected-packing.png",
            iconAlt: "Protective packaging icon",
            label: dict.biserOil.keyBenefits.items.protectivePacking,
          },
          {
            iconSrc: "/benefits-no-trans-fats.png",
            iconAlt: "No trans fats icon",
            label: dict.biserOil.keyBenefits.items.noTransFats,
          },
        ]}
      />

      <BiserCommercialPacking
        title={dict.biserOil.commercialPacking.title}
        productName={dict.biserOil.commercialPacking.productName}
        productSubtitle={dict.biserOil.commercialPacking.productSubtitle}
        detailSlots={[
          { iconSrc: "/commercial-palette.png",         label: dict.biserOil.commercialPacking.details.palette.label    },
          { iconSrc: "/commercial-packing.png",         label: dict.biserOil.commercialPacking.details.packing.label    },
          { iconSrc: "/commercial-shelf-life.png",      label: dict.biserOil.commercialPacking.details.shelfLife.label  },
          { iconSrc: "/commercial-thermofoil-pack.png", label: dict.biserOil.commercialPacking.details.thermofoil.label },
        ]}
        items={[
          { imageSrc: "/commercial-10l.png",    imageAlt: "Commercial packing 10L",    detailValues: [dict.biserOil.commercialPacking.itemDetails["10l"].palette,    dict.biserOil.commercialPacking.itemDetails["10l"].packing,    dict.biserOil.commercialPacking.details.shelfLife.value, dict.biserOil.commercialPacking.itemDetails["10l"].thermofoil    ] },
          { imageSrc: "/commercial-5l.png",     imageAlt: "Commercial packing 5L",     detailValues: [dict.biserOil.commercialPacking.itemDetails["5l"].palette,     dict.biserOil.commercialPacking.itemDetails["5l"].packing,     dict.biserOil.commercialPacking.details.shelfLife.value, dict.biserOil.commercialPacking.itemDetails["5l"].thermofoil     ] },
          { imageSrc: "/commercial-4750ml.png", imageAlt: "Commercial packing 4750mL", detailValues: [dict.biserOil.commercialPacking.itemDetails["4750ml"].palette, dict.biserOil.commercialPacking.itemDetails["4750ml"].packing, dict.biserOil.commercialPacking.details.shelfLife.value, dict.biserOil.commercialPacking.itemDetails["4750ml"].thermofoil ] },
          { imageSrc: "/commercial-950ml.png",  imageAlt: "Commercial packing 950mL",  detailValues: [dict.biserOil.commercialPacking.itemDetails["950ml"].palette,  dict.biserOil.commercialPacking.itemDetails["950ml"].packing,  dict.biserOil.commercialPacking.details.shelfLife.value, dict.biserOil.commercialPacking.itemDetails["950ml"].thermofoil  ] },
          { imageSrc: "/commercial-850ml.png",  imageAlt: "Commercial packing 850mL",  detailValues: [dict.biserOil.commercialPacking.itemDetails["850ml"].palette,  dict.biserOil.commercialPacking.itemDetails["850ml"].packing,  dict.biserOil.commercialPacking.details.shelfLife.value, dict.biserOil.commercialPacking.itemDetails["850ml"].thermofoil  ] },
          { imageSrc: "/commercial-1l.png",     imageAlt: "Commercial packing 1L",     detailValues: [dict.biserOil.commercialPacking.itemDetails["1l"].palette,     dict.biserOil.commercialPacking.itemDetails["1l"].packing,     dict.biserOil.commercialPacking.details.shelfLife.value, dict.biserOil.commercialPacking.itemDetails["1l"].thermofoil     ] },
        ]}
      />

      <BiserGuarantee
        title={dict.biserOil.guarantee.title}
        paragraphs={dict.biserOil.guarantee.paragraphs}
        imageSrc="/biser-guarantee.png"
        imageAlt="BISER sunflower oil bottles - A Guarantee of Quality and Trust"
      />

      <BiserBulkPackaging
        title={dict.biserOil.bulkPackaging.title}
        items={[
          {
            imageSrc: "/bulk-containers.png",
            imageAlt: "ISO-certified 20ft and 40ft tank containers",
            description: dict.biserOil.bulkPackaging.items.containers,
            aspectRatio: "aspect-[550/270]",
          },
          {
            imageSrc: "/bulk-storage.png",
            imageAlt: "Stainless steel storage tanks",
            description: dict.biserOil.bulkPackaging.items.storage,
            aspectRatio: "aspect-square",
          },
          {
            imageSrc: "/bulk-vessel.png",
            imageAlt: "Specialized tanker vessel",
            description: dict.biserOil.bulkPackaging.items.vessel,
            aspectRatio: "aspect-[550/270]",
          },
        ]}
      />
    </div>
  );
}
