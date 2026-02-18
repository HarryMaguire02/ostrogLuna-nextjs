import Image from "next/image";
import Container from "./Container";

interface Feature {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface ProductionExcellenceProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export default function ProductionExcellence({
  title,
  subtitle,
  features,
}: ProductionExcellenceProps) {
  return (
    <section className="py-6">
      <Container>
        {/* Section heading with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="hidden md:block h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden md:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Subtitle */}
        <p className="text-primary text-center mb-10">
          {subtitle}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const icon = (
              <div className="relative w-16 h-16 my-4">
                <Image
                  src={feature.iconSrc}
                  alt={feature.iconAlt}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
            );
            const title = (
              <h3 className="text-lg font-bold text-primary mb-2">
                {feature.title}
              </h3>
            );
            const description = (
              <p className="text-primary text-sm leading-relaxed">
                {feature.description}
              </p>
            );

            if (i % 2 !== 0) {
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Normal order on small screens */}
                  <div className="flex flex-col items-center sm:hidden">
                    {icon}{title}{description}
                  </div>
                  {/* Alternating order on sm+ */}
                  <div className="hidden sm:flex flex-col items-center">
                    {title}{description}{icon}
                  </div>
                </div>
              );
            }

            return (
              <div key={i} className="flex flex-col items-center text-center">
                {icon}{title}{description}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
