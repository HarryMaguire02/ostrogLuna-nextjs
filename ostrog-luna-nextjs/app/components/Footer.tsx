import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import type { Dictionary, Locale } from "../i18n";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  return (
    <footer className="bg-primary text-white">
      <Container className="pt-6 pb-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Logo & Social - 50% width */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <Link href="/">
              <Image
                src="/ostrog-luna-logo-footer.png"
                alt="Ostrog Luna"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <div>
              <p className="text-secondary font-medium mb-2">
                {dict.footer.followUs}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/ostrogluna"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <Image
                    src="/facebook-logo.png"
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ostrog_luna"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <Image
                    src="/instagram-logo.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - 50% width */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-[4fr_3fr_3fr] gap-8">
            {/* Opening Hours */}
            <div>
              <h3 className="text-secondary font-medium mb-4">
                {dict.footer.openingHours}
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex sm:justify-start gap-2">
                  <dt>{dict.footer.mondayFriday}</dt>
                  <dd>7:30 - 16:30</dd>
                </div>
                <div className="flex sm:justify-start gap-2">
                  <dt>{dict.footer.saturday}</dt>
                  <dd>7:30 - 16:30</dd>
                </div>
              </dl>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-secondary font-medium mb-4">
                {dict.footer.address}
              </h3>
              <address className="not-italic text-sm space-y-1">
                <p>Atanas Mucev no.2</p>
                <p>2400 Strumica</p>
                <p>Republic of North Macedonia</p>
              </address>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-secondary font-medium mb-4">
                {dict.footer.information}
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <a
                    href="tel:+38934346611"
                    className="hover:text-secondary transition-colors"
                  >
                    +389 34 346 611
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@ostrogluna.com"
                    className="hover:text-secondary transition-colors"
                  >
                    info@ostrogluna.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Policy links & Copyright */}
        <hr className="border-t-2 border-secondary mt-4" />
        <div className="flex flex-col items-center gap-3 pt-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href={`${prefix}/privacy-policy`} className="text-xs text-white/60 hover:text-white transition-colors">
              {dict.footer.privacyPolicy}
            </Link>
            <Link href={`${prefix}/cookie-policy`} className="text-xs text-white/60 hover:text-white transition-colors">
              {dict.footer.cookiePolicy}
            </Link>
            <Link href={`${prefix}/terms-of-use`} className="text-xs text-white/60 hover:text-white transition-colors">
              {dict.footer.termsOfUse}
            </Link>
            <Link href={`${prefix}/whistleblower-policy`} className="text-xs text-white/60 hover:text-white transition-colors">
              {dict.footer.whistleblowerPolicy}
            </Link>
          </div>
          <p className="text-sm text-white/60">
            &copy;{new Date().getFullYear()} {dict.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
