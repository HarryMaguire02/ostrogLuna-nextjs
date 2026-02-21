import Image from "next/image";
import Container from "./Container";

interface PrivateLabelSolutionsProps {
  pageLabel: string;
  label: string;
  subtitle: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function PrivateLabelSolutions({
  pageLabel,
  label,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
}: PrivateLabelSolutionsProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          {/* Content */}
          <div className="w-full sm:w-1/2">
            {/* Page label */}
            <p className="text-sm font-bold tracking-widest text-primary mb-1">
              {pageLabel}
            </p>

            {/* Title with accent line */}
            <div className="flex items-center gap-4 mb-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {label}
              </h2>
              <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
            </div>

            {/* Subtitle */}
            <p className="text-sm font-bold tracking-widest text-primary mb-6">
              {subtitle}
            </p>

            {/* Paragraphs */}
            <div className="space-y-4">
              {paragraphs.map((text, i) => (
                <p key={i} className="text-primary leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
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
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
