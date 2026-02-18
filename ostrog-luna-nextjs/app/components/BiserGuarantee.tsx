import Image from "next/image";
import Container from "./Container";

interface BiserGuaranteeProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function BiserGuarantee({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: BiserGuaranteeProps) {
  return (
    <section className="py-6">
      <Container>
        {/* Title row - full width */}
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap text-center sm:text-left">
            {title}
          </h2>
          <span className="h-0.75 w-full rounded-full bg-linear-to-r from-primary to-secondary hidden sm:block" />
        </div>

        {/* Paragraphs + Image row */}
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          {/* Paragraphs */}
          <div className="w-full sm:w-1/2 space-y-4">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-primary leading-relaxed text-center sm:text-left">
                {text}
              </p>
            ))}
          </div>

          {/* Image */}
          <div className="w-full sm:w-1/2 shrink-0">
            <div className="relative w-full aspect-4/3">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
