import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="antialiased bg-white" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <Link href="/en" className="mb-10">
            <Image
              src="/ostrog-luna-logo.png"
              alt="Ostrog Luna"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <p className="text-8xl font-bold text-primary mb-4">404</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-500 mb-8 max-w-md">
            The page you are looking for does not exist or has been moved.
          </p>

          <Link
            href="/"
            className="bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors rounded-2xl"
          >
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
