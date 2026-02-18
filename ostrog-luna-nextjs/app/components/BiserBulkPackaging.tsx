import Image from "next/image";
import Container from "./Container";

interface BulkItem {
  imageSrc: string;
  imageAlt: string;
  description: string;
  aspectRatio: string;
}

interface BiserBulkPackagingProps {
  title: string;
  items: BulkItem[];
}

export default function BiserBulkPackaging({
  title,
  items,
}: BiserBulkPackagingProps) {
  return (
    <section className="py-6">
      <Container>
        {/* Section heading with decorative lines */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary hidden sm:block" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap text-center">
            {title}
          </h2>
          <span className="h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary hidden sm:block" />
        </div>

        {/* Items */}
        <div className="flex flex-col">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 sm:gap-8 ${i > 0 ? "sm:-mt-20 md:-mt-28" : ""} ${
                i % 2 === 0
                  ? "flex-col sm:flex-row"
                  : "flex-col sm:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full sm:w-1/2 shrink-0">
                <div className={`relative w-full ${item.aspectRatio} sm:aspect-auto sm:h-72 md:h-100`}>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full sm:w-1/2">
                <span className="hidden sm:block sm:w-20 md:w-28 h-0.75 bg-secondary rounded-full mb-4" />
                <p className="text-primary leading-relaxed text-center sm:text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
