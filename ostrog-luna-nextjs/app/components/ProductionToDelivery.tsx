import Image from "next/image";
import Container from "./Container";

interface DeliveryItem {
  imageSrc: string;
  imageAlt: string;
  label: string;
  description: string;
}

interface ProductionToDeliveryProps {
  title: string;
  subtitle: string;
  backgroundSrc: string;
  backgroundAlt: string;
  items: DeliveryItem[];
}

// Diagonal positions from bottom-left to top-right within the items panel
const POSITIONS = [
  { left: "8%",  top: "62%" },
  { left: "30%", top: "40%" },
  { left: "56%", top: "18%" },
  { left: "80%", top: "2%"  },
] as const;

export default function ProductionToDelivery({
  title,
  subtitle,
  backgroundSrc,
  backgroundAlt,
  items,
}: ProductionToDeliveryProps) {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      {/* Background image — desktop only, scales to section height */}
      <div className="hidden sm:block absolute inset-y-0 left-0 right-0">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          width={1440}
          height={1024}
          className="h-full w-auto max-w-none ml-auto"
          sizes="100vh"
        />
      </div>

      <Container className="relative z-10">
        {/* Title + subtitle */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>
        <p className="text-text leading-relaxed sm:max-w-2xl">{subtitle}</p>

        {/* Desktop items panel — positioned within container padding */}
        <div className="hidden sm:block relative h-[460px]">
          {items.map((item, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left: POSITIONS[i].left, top: POSITIONS[i].top, transform: "translateX(-50%)" }}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="160px"
                />
              </div>
              <div className="mt-2 text-center w-32 md:w-40">
                <p className="text-xs md:text-sm font-bold text-primary leading-tight drop-shadow-sm">
                  {item.label}
                </p>
                <p className="text-xs text-primary mt-0.5 drop-shadow-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>


      {/* Mobile — grid then image pulled up to half-overlap */}
      <div className="sm:hidden mt-6">
        {/* Grid — z-10 so it stays above the image in the overlap zone */}
        <div className="relative z-10">
          <Container className="py-6">
            <div className="grid grid-cols-2 gap-6">
              {items.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 mb-3">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <p className="text-sm font-bold text-primary">{item.label}</p>
                  <p className="text-xs text-text mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Image — negative margin pulls it up ~half its height into the grid */}
        <div className="relative w-full aspect-video -mt-28">
          <Image
            src={backgroundSrc}
            alt={backgroundAlt}
            fill
            className="object-cover object-bottom"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>
      </div>
    </section>
  );
}
