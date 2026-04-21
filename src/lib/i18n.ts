export const locales = ["ro", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ro";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "ro" ? "en" : "ro";
}

export function getLocaleUrl(locale: Locale, pathname = ""): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const suffix = normalized === "/" ? "" : normalized.replace(/\/$/, "");

  return `/${locale}${suffix}`;
}

export function getLocaleDirection(_locale: Locale): "ltr" {
  return "ltr";
}
