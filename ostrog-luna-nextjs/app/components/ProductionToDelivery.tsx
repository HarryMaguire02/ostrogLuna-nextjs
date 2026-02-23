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
      {/* Background image — desktop only */}
      <div className="hidden sm:block absolute inset-0">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          className="object-cover"
          sizes="100vw"
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
        <p className="text-primary leading-relaxed sm:max-w-2xl">{subtitle}</p>

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
                <p className="text-xs text-primary/80 mt-0.5 drop-shadow-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Mobile — background image below content */}
      <div className="sm:hidden mt-6 relative w-full aspect-4/3">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Mobile — 2×2 grid */}
      <div className="sm:hidden mt-6">
        <Container>
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
                <p className="text-xs text-primary/70 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
