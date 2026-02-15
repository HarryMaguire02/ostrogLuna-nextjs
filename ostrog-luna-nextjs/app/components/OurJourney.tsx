import Image from "next/image";
import Container from "./Container";

interface Milestone {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface OurJourneyProps {
  title: string;
  milestones: Milestone[];
}

export default function OurJourney({ title, milestones }: OurJourneyProps) {
  const primaryRGB = [48, 60, 120];
  const secondaryRGB = [252, 222, 28];

  function getDotColor(index: number, total: number) {
    const t = total <= 1 ? 0 : index / (total - 1);
    const r = Math.round(primaryRGB[0] + (secondaryRGB[0] - primaryRGB[0]) * t);
    const g = Math.round(primaryRGB[1] + (secondaryRGB[1] - primaryRGB[1]) * t);
    const b = Math.round(primaryRGB[2] + (secondaryRGB[2] - primaryRGB[2]) * t);
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <section className="py-6">
      <Container>
        {/* Section heading with decorative lines */}
        <div className="flex items-center gap-4 mb-4 md:mb-6">
          <span className="h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary whitespace-nowrap">
            {title}
          </h2>
          <span className="h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {milestones.map((milestone, i) => {
            const isEven = i % 2 === 0;
            const dotColor = getDotColor(i, milestones.length);
            const isFirst = i === 0;
            const isLast = i === milestones.length - 1;

            return (
              <div
                key={i}
                className={`grid grid-cols-[1fr_40px_1fr] items-center gap-x-4 md:gap-x-6 ${isFirst ? "" : "mt-2 sm:-mt-8 md:-mt-12 lg:-mt-24"}`}
              >
                {/* Left cell */}
                <div className={isEven ? "" : "text-center sm:text-right"}>
                  {isEven ? (
                    <Image
                      src={milestone.imageSrc}
                      alt={milestone.imageAlt}
                      width={486}
                      height={273}
                      className="w-full h-auto"
                    />
                  ) : (
                    <div>
                      <h3 className="text-sm md:text-2xl font-bold text-primary uppercase tracking-wide mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-primary/70 text-base">
                        {milestone.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center dot with line segments */}
                <div className="relative flex justify-center items-center self-stretch">
                  {!isFirst && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-1 -top-1 sm:top-0 bottom-1/2"
                      style={{
                        background: `linear-gradient(to bottom, ${getDotColor(i - 0.5, milestones.length)}, ${dotColor})`,
                      }}
                    />
                  )}
                  {!isLast && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-1 top-1/2 -bottom-1 sm:bottom-0"
                      style={{
                        background: `linear-gradient(to bottom, ${dotColor}, ${getDotColor(i + 0.5, milestones.length)})`,
                      }}
                    />
                  )}
                  <div
                    className="w-5 h-5 rounded-full z-10 shrink-0"
                    style={{ backgroundColor: dotColor }}
                  />
                </div>

                {/* Right cell */}
                <div className={isEven ? "text-center sm:text-left" : ""}>
                  {isEven ? (
                    <div>
                      <h3 className="text-sm md:text-2xl font-bold text-primary uppercase tracking-wide mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-primary/70 text-sm md:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  ) : (
                    <Image
                      src={milestone.imageSrc}
                      alt={milestone.imageAlt}
                      width={486}
                      height={273}
                      className="w-full h-auto"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
