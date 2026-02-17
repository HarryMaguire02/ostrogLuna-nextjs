import Image from "next/image";
import Container from "./Container";

interface Product {
  imageSrc: string;
  imageAlt: string;
  label: string;
}

interface ProductRangeProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export default function ProductRange({
  title,
  subtitle,
  products,
}: ProductRangeProps) {
  return (
    <section className="py-6">
      <Container>
        {/* Section heading with decorative lines */}
        <div className="flex items-center gap-4 mb-2">
          <span className="h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary whitespace-nowrap">
            {title}
          </h2>
          <span className="h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Subtitle */}
        <p className="text-primary text-center mb-8">
          {subtitle}
        </p>

        {/* Product cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl border-2 border-primary/20 p-4 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full aspect-square mb-3">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
              <p className="text-primary text-sm font-medium text-center">
                {product.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
