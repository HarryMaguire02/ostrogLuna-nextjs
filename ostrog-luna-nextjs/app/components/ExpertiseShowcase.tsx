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
    <section className="py-8 sm:py-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          {/* Image */}
          <div className="w-full sm:w-1/2 flex-shrink-0">
            <div className="relative w-full aspect-[4/5]">
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
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary whitespace-nowrap">
                {title}
              </h2>
              <span className="hidden sm:block h-0.75 w-full rounded-full bg-linear-to-r from-primary to-secondary" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 mb-10">
              {paragraphs.map((text, i) => (
                <p key={i} className="text-primary leading-relaxed">
                  {text}
                </p>
              ))}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="flex items-center justify-between">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 flex-1">
                    {/* Stat */}
                    <div className="text-center flex-1">
                      <p className="text-3xl md:text-4xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs font-semibold tracking-wide text-primary uppercase mt-1">
                        {stat.label}
                      </p>
                    </div>

                    {/* Separator line (not after last item) */}
                    {i < stats.length - 1 && (
                      <span className="h-0.5 w-8 md:w-12 bg-primary rounded-full shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
