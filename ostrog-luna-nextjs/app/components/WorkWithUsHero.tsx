import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

interface WorkWithUsHeroProps {
  label: string;
  title: string;
  paragraph: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
  lang: string;
}

export default function WorkWithUsHero({
  label,
  title,
  paragraph,
  ctaLabel,
  imageSrc,
  imageAlt,
  lang,
}: WorkWithUsHeroProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* flex-col-reverse so on mobile content appears first, image below */}
        <div className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-12">
          {/* Image */}
          <div className="w-full sm:w-1/2 shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={673}
              height={443}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Content */}
          <div className="w-full sm:w-1/2">
            {/* Label */}
            <p className="text-sm font-bold tracking-widest text-primary mb-1">
              {label}
            </p>

            {/* Title with accent line */}
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-pre-line sm:shrink-0">
                {title}
              </h1>
              <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
            </div>

            {/* Paragraph */}
            <p className="text-primary leading-relaxed mb-8">{paragraph}</p>

            {/* CTA */}
            <Link
              href={`/${lang}/contact-us`}
              className="inline-block bg-primary text-secondary font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
