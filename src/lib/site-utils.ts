import { notFound } from "next/navigation";

import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

export const localeParams = [{ locale: "ro" }, { locale: "en" }] as const;

export function ensureLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

export function getLocaleTag(locale: Locale) {
  return locale === "ro" ? "ro-RO" : "en";
}

export function formatDate(locale: Locale, date: string) {
  return new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-US", {
    dateStyle: "long"
  }).format(new Date(date));
}

export function withLocale(locale: Locale, href: string) {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export function getCanonicalUrl(locale: Locale, href = "") {
  return `https://kkcb.org/${locale}${href}`;
}

export function getDefaultLocale() {
  return defaultLocale;
}
