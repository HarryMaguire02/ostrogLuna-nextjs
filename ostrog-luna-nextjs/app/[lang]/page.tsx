import Container from "../components/Container";
import { getDictionary } from "../i18n";
import type { Locale } from "../i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-20 min-h-screen">
      <Container className="py-16">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {dict.home.welcome}
        </h1>
        <p className="text-lg text-gray-600">{dict.home.subtitle}</p>
      </Container>
    </div>
  );
}
