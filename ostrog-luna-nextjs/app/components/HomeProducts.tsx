import Image from "next/image";
import Container from "./Container";

interface Product {
  imageSrc: string;
  imageAlt: string;
  name: string;
  size: string;
}

interface HomeProductsProps {
  title: string;
  products: Product[];
}

export default function HomeProducts({ title, products }: HomeProductsProps) {
  return (
    <section className="pb-8 sm:pb-12">
      <Container>
        {/* Centered title with decorative lines */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Product cards — extra top margin accommodates image overflow above card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-12 justify-items-center">
          {products.map((product, i) => (
            <div
              key={i}
              className="relative max-w-50 border-2 border-secondary bg-secondary/20 rounded-lg px-10 pb-15 pt-15"
            >
              {/* Image — absolutely positioned, overflows above card top edge */}
              <div className="absolute top-5 left-0 -translate-x-1/2 w-20 h-40">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <p className="text-sm font-semibold text-primary text-center">{product.name}</p>
              <p className="text-sm text-primary/70 text-center">{product.size}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
