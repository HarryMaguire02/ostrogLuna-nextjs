import Image from "next/image";
import Container from "./Container";
import type { Dictionary } from "../i18n";

type Props = {
  dict: Dictionary["contactUs"]["facility"];
};

export default function ContactFacility({ dict }: Props) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Section title */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:block h-0.5 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {dict.title}
          </h2>
          <span className="hidden sm:block h-0.5 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-center gap-6 sm:gap-12">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="relative w-10 h-10 shrink-0 mt-0.5">
              <Image
                src="/contact-location.png"
                alt="Location"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <address className="not-italic text-primary leading-relaxed">
              <p>{dict.address.line1}</p>
              <p>{dict.address.line2}</p>
              <p>{dict.address.line3}</p>
            </address>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="relative w-10 h-10 shrink-0 mt-0.5">
              <Image
                src="/contact-clock.png"
                alt="Opening hours"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="flex gap-4 text-primary">
              <div className="leading-relaxed">
                <p>{dict.hours.mondayFriday}</p>
                <p>{dict.hours.saturday}</p>
              </div>
              <div className="w-px bg-gray-300 self-stretch" />
              <div className="leading-relaxed">
                <p>{dict.hours.time}</p>
                <p>{dict.hours.time}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
