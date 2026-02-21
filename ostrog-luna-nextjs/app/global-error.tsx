"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          backgroundColor: "#ffffff",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        <p style={{ fontSize: "6rem", fontWeight: 700, color: "#303C78", margin: "0 0 1rem" }}>
          500
        </p>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#303C78", margin: "0 0 1rem" }}>
          Something Went Wrong
        </h1>
        <p style={{ color: "#6b7280", marginBottom: "2rem", maxWidth: "28rem" }}>
          A critical error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          style={{
            backgroundColor: "#303C78",
            color: "#ffffff",
            padding: "0.75rem 2rem",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
