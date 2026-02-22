import Link from "next/link";
import Container from "./Container";

interface Step {
  title: string;
  description: string;
}

interface SimpleCooperationProps {
  title: string;
  steps: Step[];
  ctaLabel: string;
  lang: string;
}

export default function SimpleCooperation({
  title,
  steps,
  ctaLabel,
  lang,
}: SimpleCooperationProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Centered title with decorative lines on both sides */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center h-full">
              <span className="block h-0.5 w-15 rounded-full bg-secondary" />
              <div
                className="rounded-2xl bg-gray-50 p-5 shadow-lg flex-1 w-full"
              >
                <h3 className="text-sm font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-primary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href={`/${lang}/contact-us`}
            className="inline-block bg-primary text-secondary font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
