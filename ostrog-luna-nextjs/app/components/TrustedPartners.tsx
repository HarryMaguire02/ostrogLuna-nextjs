import Image from "next/image";
import Container from "./Container";

interface Partner {
  imageSrc: string;
  imageAlt: string;
}

interface TrustedPartnersProps {
  title: string;
  paragraphs: string[];
  partners: Partner[];
}

export default function TrustedPartners({
  title,
  paragraphs,
  partners,
}: TrustedPartnersProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Title with accent line */}
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 w-full rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Two columns: text left, partner logos right */}
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          {/* Paragraphs */}
          <div className="w-full sm:w-1/2 space-y-4">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-primary leading-relaxed">
                {text}
              </p>
            ))}
          </div>

          {/* Partner logos */}
          <div className="w-full sm:w-1/2 flex flex-wrap justify-center gap-6">
            {partners.map((partner, i) => (
              <Image
                key={i}
                src={partner.imageSrc}
                alt={partner.imageAlt}
                width={287}
                height={287}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
