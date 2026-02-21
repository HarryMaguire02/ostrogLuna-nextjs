import Image from "next/image";
import Container from "./Container";

interface FlexiblePackagingSolutionsProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function FlexiblePackagingSolutions({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: FlexiblePackagingSolutionsProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Title with decorative lines */}
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Two columns: image + text */}
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
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

          {/* Paragraphs */}
          <div className="w-full sm:w-1/2">
            <div className="space-y-4">
              {paragraphs.map((text, i) => (
                <p key={i} className="text-primary leading-relaxed">
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
