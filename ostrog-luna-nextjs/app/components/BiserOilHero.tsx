import Image from "next/image";
import Container from "./Container";

interface BiserOilHeroProps {
  label: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function BiserOilHero({
  label,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: BiserOilHeroProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-12">
          {/* Image */}
          <div className="w-full sm:w-1/2 shrink-0">
            <div className="relative w-full aspect-780/620">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full sm:w-1/2">
            {/* Label */}
            <p className="text-sm font-bold tracking-widest text-primary mb-1">
              {label}
            </p>

            {/* Title with accent line */}
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary whitespace-pre-line">
                {title}
              </h1>
              <span className="h-0.75 w-full rounded-full bg-linear-to-r from-primary to-secondary hidden sm:block" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4">
              {paragraphs.map((text, i) => (
                <p key={i} className="text-primary leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
