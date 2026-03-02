import Image from "next/image";
import Link from "next/link";

interface Cert {
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
}

interface HomeCertsBannerProps {
  certs: Cert[];
  lang: string;
}

export default function HomeCertsBanner({ certs, lang }: HomeCertsBannerProps) {
  return (
    <div className="bg-primary py-8 sm:py-10">
      <div className="flex items-center justify-center gap-10 sm:gap-20 px-8">
        {certs.map((cert, i) => (
          <Link
            key={i}
            href={`/${lang}/about-us#certifications`}
            className="hover:opacity-85 transition-opacity"
          >
            <Image
              src={cert.imageSrc}
              alt={cert.imageAlt}
              width={cert.width}
              height={cert.height}
              className="h-16 sm:h-24 w-auto"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
