import { notFound } from "next/navigation";

import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

export const localeParams = [{ locale: "ro" }, { locale: "en" }] as const;
export const SITE_BASE_URL = "https://kkc-romania.org";
export const REQUEST_PATH_HEADER = "x-kkcb-pathname";

type HeaderReader = {
  get(name: string): string | null;
};

export function ensureLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

export function getLocaleTag(locale: Locale) {
  return locale === "ro" ? "ro-RO" : "en";
}

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  const cleanPathname = (pathname ?? "").split(/[?#]/, 1)[0];
  const firstSegment = cleanPathname.split("/").find(Boolean);

  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function getLocaleTagFromPathname(pathname: string | null | undefined) {
  return getLocaleTag(getLocaleFromPathname(pathname));
}

export function getPathnameFromHeaders(headers: HeaderReader) {
  return (
    headers.get(REQUEST_PATH_HEADER) ??
    headers.get("x-matched-path") ??
    headers.get("x-invoke-path") ??
    "/"
  );
}

export function getLocaleFromHeaders(headers: HeaderReader) {
  return getLocaleFromPathname(getPathnameFromHeaders(headers));
}

export function getLocaleTagFromHeaders(headers: HeaderReader) {
  return getLocaleTag(getLocaleFromHeaders(headers));
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
  return `${SITE_BASE_URL}/${locale}${href}`;
}

export function getDefaultLocale() {
  return defaultLocale;
}
