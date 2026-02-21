import type { Metadata } from "next";
import Container from "../../components/Container";
import { getDictionary } from "../../i18n";
import type { Locale } from "../../i18n";

const BASE_URL = process.env.SITE_URL ?? "https://ostrogluna.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isMk = lang === "mk";

  return {
    title: isMk
      ? "Политика за пријавување нерегуларности | Острог Луна"
      : "Whistleblower Policy | Ostrog Luna",
    alternates: {
      canonical: isMk
        ? `${BASE_URL}/mk/whistleblower-policy`
        : `${BASE_URL}/whistleblower-policy`,
      languages: {
        en: `${BASE_URL}/whistleblower-policy`,
        mk: `${BASE_URL}/mk/whistleblower-policy`,
      },
    },
    robots: { index: false, follow: false },
  };
}

export default async function WhistleblowerPolicy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.whistleblowerPolicy;

  return (
    <div className="pt-20 min-h-screen">
      <Container className="py-16 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">
          {t.title}
        </h1>

        <p className="text-gray-700 leading-relaxed mb-10">{t.intro}</p>

        <div className="space-y-8">
          {Object.values(t.sections).map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-primary mb-2">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 space-y-2 text-gray-700">
          <p>
            {t.sections.reportingChannel.content}{" "}
            <a
              href="mailto:info@ostrogluna.com"
              className="text-primary font-medium hover:underline"
            >
              info@ostrogluna.com
            </a>
          </p>
          <p>
            {t.contactNote}{" "}
            <a
              href="mailto:info@ostrogluna.com"
              className="text-primary font-medium hover:underline"
            >
              info@ostrogluna.com
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
