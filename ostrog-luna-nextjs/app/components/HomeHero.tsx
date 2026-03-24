import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

interface HeroFeature {
  iconSrc: string;
  iconAlt: string;
  label: string;
}

interface HomeHeroProps {
  title: string;
  subtitle: string;
  ctaExplore: string;
  ctaContact: string;
  features: HeroFeature[];
  imageSrc: string;
  imagePhone: string;
  imageAlt: string;
  lang: string;
}

export default function HomeHero({
  title,
  subtitle,
  ctaExplore,
  ctaContact,
  features,
  imageSrc,
  imageAlt,
  lang,
}: HomeHeroProps) {
  const [titleBold, titleLight] = title.split("\n");

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 sm:min-h-[600px] lg:min-h-[700px]">
      {/* Desktop background image — positioned center-right */}
      <div className="hidden sm:block absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain object-right min-[1920px]:object-[75%_center]"
          sizes="100vw"
          priority
        />
      </div>

      <Container className="relative z-10 sm:pl-12 lg:pl-16">
        {/* Text content — left side on desktop, full width on mobile */}
        <div className="sm:max-w-[50%] lg:max-w-[40%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary mb-4 leading-tight">
            <span className="block font-bold">{titleBold}</span>
            <span className="block font-light">{titleLight}</span>
          </h1>

          <p className="text-text leading-relaxed mb-8">{subtitle}</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href={`/${lang}/biser-oil`}
              className="inline-block bg-primary text-secondary font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              {ctaExplore}
            </Link>
            <Link
              href={`/${lang}/contact-us`}
              className="inline-block bg-secondary text-primary font-bold px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors"
            >
              {ctaContact}
            </Link>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="relative w-8 h-8 shrink-0">
                  <Image
                    src={f.iconSrc}
                    alt={f.iconAlt}
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
                <span className="text-sm font-semibold text-primary">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Mobile: image below content */}
      <div className="sm:hidden relative w-full aspect-4/3 mt-8">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain drop-shadow-xl"
          sizes="calc(100vw - 2rem)"
          priority
        />
      </div>
    </section>
  );
}
