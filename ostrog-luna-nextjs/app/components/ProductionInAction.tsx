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
    <section className="py-6">
      <Container>
        {/* Section heading with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="hidden md:block h-0.75 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center sm:whitespace-nowrap">
            {title}
          </h2>
          <span className="hidden md:block h-0.75 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        {/* Subtitle */}
        <p className="text-primary text-center mb-8">
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
