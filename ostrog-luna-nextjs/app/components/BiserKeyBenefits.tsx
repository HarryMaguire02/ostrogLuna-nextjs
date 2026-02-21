import Image from "next/image";
import Container from "./Container";

interface BenefitItem {
  iconSrc: string;
  iconAlt: string;
  label: string;
}

interface BiserKeyBenefitsProps {
  title: string;
  items: BenefitItem[];
}

export default function BiserKeyBenefits({
  title,
  items,
}: BiserKeyBenefitsProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Section heading with decorative lines */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Benefits grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3 w-32">
              <div className="relative w-16 h-16">
                <Image
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <p className="text-primary text-sm font-medium leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
