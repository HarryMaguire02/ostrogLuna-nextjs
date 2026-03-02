import Image from "next/image";
import Container from "./Container";

interface Certificate {
  imageSrc: string;
  imageAlt: string;
  label: string;
  pdfSrc: string;
}

interface CertificationsProps {
  title: string;
  description: string;
  certificates: Certificate[];
}

export default function Certifications({
  title,
  description,
  certificates,
}: CertificationsProps) {
  return (
    <section id="certifications" className="py-8 sm:py-12">
      <Container>
        {/* Section heading with decorative lines */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Description */}
        <p className="text-text sm:text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>

        {/* Certificate cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((cert, i) => (
            <a
              key={i}
              href={cert.pdfSrc}
              download
              className="flex flex-col items-center rounded-2xl border-2 border-primary px-3 py-4 shadow-sm hover:shadow-lg hover:border-secondary transition-all w-56"
            >
              <div className="relative w-44 h-44 mb-6">
                <Image
                  src={cert.imageSrc}
                  alt={cert.imageAlt}
                  fill
                  className="object-contain"
                  sizes="176px"
                />
              </div>
              <span className="h-1 w-12 rounded-full bg-secondary mb-4" />
              <p className="text-primary text-sm font-medium text-center leading-snug">
                {cert.label}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-primary/50 uppercase tracking-wide">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V3m0 12l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
                </svg>
                Download PDF
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
