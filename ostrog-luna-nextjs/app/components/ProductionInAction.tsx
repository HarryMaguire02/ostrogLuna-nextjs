import Container from "./Container";

interface ProductionInActionProps {
  title: string;
  subtitle: string;
  videoSrc: string;
}

export default function ProductionInAction({
  title,
  subtitle,
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

        {/* Video */}
        <div className="flex justify-center">
          <video
            className="rounded-2xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </Container>
    </section>
  );
}
