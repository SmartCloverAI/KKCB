import type { Locale } from "@/lib/i18n";

export const HEADER_MOBILE_NAV_ID = "site-mobile-nav";
export const HEADER_MOBILE_BREAKPOINT = 920;

const menuButtonLabels: Record<Locale, { close: string; open: string }> = {
  en: {
    close: "Close navigation menu",
    open: "Open navigation menu"
  },
  ro: {
    close: "Închide meniul de navigare",
    open: "Deschide meniul de navigare"
  }
};

export function getHeaderMenuButtonLabel(locale: Locale, expanded: boolean) {
  return expanded ? menuButtonLabels[locale].close : menuButtonLabels[locale].open;
}

export function isNavigationItemActive(pathname: string, href: string) {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const localizedPath = normalizedPath.replace(/^\/(ro|en)(?=\/|$)/, "") || "/";

  if (href === "/") {
    return localizedPath === "/";
  }

  return localizedPath === href || localizedPath.startsWith(`${href}/`);
}
