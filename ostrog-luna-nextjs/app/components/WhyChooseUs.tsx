import Image from "next/image";
import Container from "./Container";

interface Feature {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  title: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
}

export default function WhyChooseUs({ title, features, imageSrc, imageAlt }: WhyChooseUsProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Centered title with decorative lines on both sides */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={feature.iconSrc}
                  alt={feature.iconAlt}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <h3 className="text-sm font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-primary text-sm leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Truck image */}
        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={940}
            height={420}
            className="w-full h-auto"
          />
        </div>
      </Container>
    </section>
  );
}
