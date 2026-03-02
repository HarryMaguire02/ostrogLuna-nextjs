import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ostrog Luna",
    short_name: "Ostrog Luna",
    description:
      "Leading producer of high-quality refined sunflower oil with 500+ business partners and exports to 20+ markets.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#303C78",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
