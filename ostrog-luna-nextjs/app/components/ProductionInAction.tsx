import Container from "./Container";

interface Highlight {
  title: string;
  description: string;
}

interface ProductionInActionProps {
  title: string;
  subtitle: string;
  body: string;
  highlights: Highlight[];
  videoSrc: string;
}

export default function ProductionInAction({
  title,
  subtitle,
  body,
  highlights,
  videoSrc,
}: ProductionInActionProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Section heading with decorative lines */}
        <div className="flex items-center gap-4 mb-2">
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden sm:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Subtitle */}
        <p className="text-primary sm:text-center mb-8">
          {subtitle}
        </p>

        {/* 2-column grid: text left, video right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: contextual text */}
          <div>
            <p className="text-text leading-relaxed mb-8">{body}</p>

            <div className="space-y-5">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="mt-2 shrink-0 h-0.75 w-6 rounded-full bg-linear-to-r from-secondary to-primary" />
                  <div>
                    <p className="font-bold text-primary mb-1">{h.title}</p>
                    <p className="text-text text-sm leading-relaxed">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: video */}
          <div className="flex justify-center">
            <video
              className="rounded-2xl max-h-[480px] w-auto"
              controls
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}
