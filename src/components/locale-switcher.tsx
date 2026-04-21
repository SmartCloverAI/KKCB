"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getAlternateLocale, type Locale } from "@/lib/i18n";

type LocaleSwitcherProps = {
  locale: Locale;
};

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const alternate = getAlternateLocale(locale);
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  segments[0] = alternate;

  return (
    <Link className="locale-switch" href={`/${segments.join("/")}`} prefetch={false}>
      {alternate.toUpperCase()}
    </Link>
  );
}
