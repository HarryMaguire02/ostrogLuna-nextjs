import Image from "next/image";
import Container from "./Container";

interface Stat {
  value: string;
  label: string;
}

interface ExpertiseShowcaseProps {
  label: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  stats?: Stat[];
}

export default function ExpertiseShowcase({
  label,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  stats,
}: ExpertiseShowcaseProps) {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 sm:min-h-175">
      {/* Desktop image — fixed height, vertically centered, bleeds off left edge */}
      <div className="hidden sm:block absolute top-1/2 left-0 w-[60%] h-[70vh] max-h-175 -translate-x-[8%] -translate-y-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-right"
          sizes="60vw"
          priority
        />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Content — right side on desktop, full width on mobile */}
          <div className="w-full sm:max-w-[40%] sm:ml-auto">
            {/* Label */}
            <p className="text-sm font-bold tracking-widest text-primary mb-1">
              {label}
            </p>

            {/* Title with accent line */}
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
                {title}
              </h2>
              <span className="hidden sm:block h-0.75 w-full rounded-full bg-linear-to-l from-primary to-secondary" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 mb-10">
              {paragraphs.map((text, i) => (
                <p key={i} className="text-text leading-relaxed">
                  {text}
                </p>
              ))}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="flex items-center justify-between">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 flex-1">
                    <div className="text-center flex-1">
                      <p className="text-3xl md:text-4xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs font-semibold tracking-wide text-primary uppercase mt-1">
                        {stat.label}
                      </p>
                    </div>
                    {i < stats.length - 1 && (
                      <span className="h-0.5 w-8 md:w-12 bg-primary rounded-full shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile image — below content */}
          <div className="sm:hidden mt-8 relative w-full aspect-2/1">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="calc(100vw - 2rem)"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
