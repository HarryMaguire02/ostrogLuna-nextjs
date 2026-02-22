import Container from "./Container";

interface Stat {
  value: string;
  label: string;
}

interface ExperienceAndScaleProps {
  title: string;
  stats: Stat[];
}

export default function ExperienceAndScale({ title, stats }: ExperienceAndScaleProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Title with accent line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 w-full rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Stats — 2 cols on mobile, row on desktop */}
        <div className="grid grid-cols-2 sm:flex sm:flex-row items-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={[
                "flex items-center sm:flex-1",
                "border-primary/30 sm:border-0",
                i % 2 === 0 ? "border-r" : "",
                i < 2 ? "border-b" : "",
              ].join(" ")}
            >
              <div className="text-center flex-1 py-6 sm:py-0">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold tracking-wide text-primary uppercase mt-1 whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <span className="hidden sm:block h-10 md:h-14 w-px bg-primary/70 rounded-full shrink-0" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
