import type { Metadata } from "next";
import HomeHero from "../components/HomeHero";
import HomeCertsBanner from "../components/HomeCertsBanner";
import ExpertiseShowcase from "../components/ExpertiseShowcase";
import HomeProducts from "../components/HomeProducts";
import ProductionToDelivery from "../components/ProductionToDelivery";
import BiserBulkPackaging from "../components/BiserBulkPackaging";
import Separator from "../components/Separator";
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
      <div className="pt-20">
        <HomeHero
          title={dict.home.hero.title}
          subtitle={dict.home.hero.subtitle}
          ctaExplore={dict.home.hero.ctaExplore}
          ctaContact={dict.home.hero.ctaContact}
          features={[
            {
              iconSrc: "/home-package.png",
              iconAlt: "Package icon",
              label: dict.home.hero.features.quality,
            },
            {
              iconSrc: "/home-factory.png",
              iconAlt: "Factory icon",
              label: dict.home.hero.features.production,
            },
            {
              iconSrc: "/home-delivery.png",
              iconAlt: "Delivery icon",
              label: dict.home.hero.features.distribution,
            },
          ]}
          imageSrc="/home-hero.png"
          imageAlt="Biser sunflower oil bottles with sunflower field"
          imagePhone="/contact-hero.png"
          lang={lang}
        />

        <HomeCertsBanner
          certs={[
            { imageSrc: "/HACCP-certificate-yellow.png", imageAlt: "HACCP certification",     width: 137, height: 100 },
            { imageSrc: "/IFS-certificate-yellow.png",   imageAlt: "IFS Food certification",  width: 235, height: 139 },
            { imageSrc: "/ISO-certificate-yellow.png",   imageAlt: "ISO 22000 certification", width: 100, height: 100 },
          ]}
        />

        <ExpertiseShowcase
          label={dict.expertise.label}
          title={dict.expertise.title}
          paragraphs={dict.expertise.paragraphs}
          imageSrc="/factory-sunflowers-v2.png"
          imageAlt="Ostrog Luna factory with sunflower fields"
          stats={[
            { value: "500+",  label: dict.expertise.stats.businessPartners },
            { value: "20",    label: dict.expertise.stats.exportMarkets },
            { value: "200MT", label: dict.expertise.stats.litersAnnually },
          ]}
        />

        <Separator />

        <HomeProducts
          title={dict.home.products.title}
          products={[
            {
              imageSrc: "/commercial-1l.png",
              imageAlt: "Biser sunflower oil 1L bottle",
              name: dict.home.products.items["1l"].name,
              size: dict.home.products.items["1l"].size,
            },
            {
              imageSrc: "/commercial-10l.png",
              imageAlt: "Biser sunflower oil 10L bottle",
              name: dict.home.products.items["10l"].name,
              size: dict.home.products.items["10l"].size,
            },
            {
              imageSrc: "/commercial-850ml.png",
              imageAlt: "Biser sunflower oil 850mL bottle",
              name: dict.home.products.items["850ml"].name,
              size: dict.home.products.items["850ml"].size,
            },
          ]}
        />

        <Separator />

        <ProductionToDelivery
          title={dict.home.productionToDelivery.title}
          subtitle={dict.home.productionToDelivery.subtitle}
          backgroundSrc="/home-production-bg.png"
          backgroundAlt="Sunflower field and production facility"
          items={[
            {
              imageSrc: "/home-bottle-sizes.png",
              imageAlt: "Multiple bottle sizes",
              label: dict.home.productionToDelivery.items.bottleSizes.label,
              description: dict.home.productionToDelivery.items.bottleSizes.description,
            },
            {
              imageSrc: "/home-production-capacity.png",
              imageAlt: "High production capacity",
              label: dict.home.productionToDelivery.items.capacity.label,
              description: dict.home.productionToDelivery.items.capacity.description,
            },
            {
              imageSrc: "/home-tank-truck.png",
              imageAlt: "Tank truck transport",
              label: dict.home.productionToDelivery.items.truckTransport.label,
              description: dict.home.productionToDelivery.items.truckTransport.description,
            },
            {
              imageSrc: "/flexi-tank-system.png",
              imageAlt: "FLEXITANK system",
              label: dict.home.productionToDelivery.items.flexitank.label,
              description: dict.home.productionToDelivery.items.flexitank.description,
            },
          ]}
        />

        <Separator />

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
    </>
  );
}
