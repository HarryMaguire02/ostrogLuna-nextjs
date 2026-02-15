import type en from "./en.json";

export type Dictionary = typeof en;
export type Locale = "en" | "mk";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en.json").then((m) => m.default),
  mk: () => import("./mk.json").then((m) => m.default),
};

export const locales: Locale[] = ["en", "mk"];
export const defaultLocale: Locale = "en";

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
