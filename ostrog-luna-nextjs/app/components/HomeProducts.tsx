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

        {/* Product cards */}
        <div className="grid grid-cols-1 max-w-250 sm:grid-cols-3 gap-5 md:gap-10 mx-auto justify-items-center">
          {products.map((product, i) => (
            <div
              key={i}
              className="relative w-full max-w-50 md:max-w-60 lg:max-w-72 h-48 md:h-56 lg:h-64 border-2 border-secondary bg-secondary/20 rounded-lg px-10 md:px-14 lg:px-16 flex flex-col justify-center"
            >
              {/* Image — centered vertically, anchored to left border */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-40 md:w-24 md:h-48 lg:w-28 lg:h-56">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                />
              </div>
              <p className="text-md md:text-lg lg:text-xl font-semibold text-text text-center">{product.name}</p>
              <p className="text-sm md:text-base text-text/70 text-center">{product.size}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
