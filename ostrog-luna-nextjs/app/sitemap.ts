import type { MetadataRoute } from "next";

const BASE_URL = process.env.SITE_URL ?? "https://ostrogluna.com";

const routes = [
  { path: "",              priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/biser-oil",   priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/packing",     priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about-us",    priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/work-with-us", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/contact-us",  priority: 0.6, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: `${BASE_URL}${path}`,
        mk: `${BASE_URL}/mk${path}`,
      },
    },
  }));
}
