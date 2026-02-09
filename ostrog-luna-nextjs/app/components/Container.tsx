interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  noPaddingMobile?: boolean;
}

export default function Container({
  children,
  className = "",
  noPaddingMobile = false,
}: ContainerProps) {
  return (
    <div
      className={`max-w-7xl mx-auto ${
        noPaddingMobile ? "px-0 sm:px-6 lg:px-8" : "px-4 sm:px-6 lg:px-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
