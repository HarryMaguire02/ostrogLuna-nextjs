"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";

interface DetailSlot {
  iconSrc: string;
  label: string;
}

interface PackingItem {
  imageSrc: string;
  imageAlt: string;
  detailValues: string[];
}

interface BiserCommercialPackingProps {
  title: string;
  productName: string;
  productSubtitle: string;
  detailSlots: DetailSlot[];
  items: PackingItem[];
}

export default function BiserCommercialPacking({
  title,
  productName,
  productSubtitle,
  detailSlots,
  items,
}: BiserCommercialPackingProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + items.length) % items.length);
  const next = () => setCurrent((i) => (i + 1) % items.length);

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

        {/* Carousel */}
        <div className="flex items-center justify-center gap-2 lg:gap-4 mb-4">
          {/* Far left (2 steps ahead) */}
          <div className="hidden lg:block relative w-20 aspect-square shrink-0 opacity-25">
            <Image
              src={items[(current + 2) % items.length].imageSrc}
              alt=""
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>

          {/* Near left (1 step ahead) */}
          <div className="hidden lg:block relative w-32 aspect-square shrink-0 opacity-50">
            <Image
              src={items[(current + 1) % items.length].imageSrc}
              alt=""
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Current image */}
          <div className="relative w-48 sm:w-64 lg:w-72 aspect-square shrink-0">
            <Image
              key={current}
              src={items[current].imageSrc}
              alt={items[current].imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 288px"
            />
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Near right (1 step behind) */}
          <div className="hidden lg:block relative w-32 aspect-square shrink-0 opacity-50">
            <Image
              src={items[(current - 1 + items.length) % items.length].imageSrc}
              alt=""
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>

          {/* Far right (2 steps behind) */}
          <div className="hidden lg:block relative w-20 aspect-square shrink-0 opacity-25">
            <Image
              src={items[(current - 2 + items.length) % items.length].imageSrc}
              alt=""
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to item ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div>

        {/* Product name */}
        <div className="text-center mb-8">
          <p className="text-xl font-bold text-primary">{productName}</p>
          <p className="text-sm text-primary/60 italic">{productSubtitle}</p>
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {detailSlots.map((slot, i) => (
            <div
              key={i}
              className="border border-primary/20 rounded-lg p-4 flex flex-col items-center text-center gap-2"
            >
              <div className="relative w-8 h-8">
                <Image
                  src={slot.iconSrc}
                  alt={slot.label}
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <p className="text-sm font-bold text-primary">{slot.label}</p>
              <p className="text-sm text-primary">{items[current].detailValues[i]}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
