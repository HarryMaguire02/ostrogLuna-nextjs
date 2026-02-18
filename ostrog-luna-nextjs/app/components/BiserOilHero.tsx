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
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: BiserOilHeroProps) {
  return (
    <section className="py-6">
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
            {/* Title with accent line */}
            <div className="flex justify-center sm:justify-start items-center gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary whitespace-pre-line text-center sm:text-left">
                {title}
              </h1>
              <span className="h-0.75 w-full rounded-full bg-linear-to-r from-primary to-secondary hidden sm:block" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4">
              {paragraphs.map((text, i) => (
                <p key={i} className="text-primary leading-relaxed text-center sm:text-left">
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
