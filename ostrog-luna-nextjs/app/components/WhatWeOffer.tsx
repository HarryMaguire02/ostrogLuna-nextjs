import Image from "next/image";
import Container from "./Container";

interface OfferItem {
  iconSrc: string;
  iconAlt: string;
  text: string;
}

interface WhatWeOfferProps {
  title: string;
  subtitle: string;
  items: OfferItem[];
}

export default function WhatWeOffer({
  title,
  subtitle,
  items,
}: WhatWeOfferProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Section heading with decorative lines */}
        <div className="flex items-center gap-4 mb-2">
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Subtitle */}
        <p className="text-primary sm:text-center mb-8">
          {subtitle}
        </p>

        {/* Offer cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <p className="text-primary text-sm leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
