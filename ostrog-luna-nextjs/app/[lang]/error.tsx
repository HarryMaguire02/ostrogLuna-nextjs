"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="pt-20 min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-bold text-primary mb-4">500</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
        Something Went Wrong
      </h1>
      <p className="text-gray-500 mb-8 max-w-md">
        An unexpected error occurred. Please try again or return to the home page.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="border border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
