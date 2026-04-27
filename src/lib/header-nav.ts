export const HEADER_MOBILE_NAV_ID = "site-mobile-nav";
export const HEADER_MOBILE_BREAKPOINT = 920;

export function getHeaderMenuButtonLabel(expanded: boolean) {
  return expanded ? "Close navigation menu" : "Open navigation menu";
}

export function isNavigationItemActive(pathname: string, href: string) {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const localizedPath = normalizedPath.replace(/^\/(ro|en)(?=\/|$)/, "") || "/";

  if (href === "/") {
    return localizedPath === "/";
  }

  return localizedPath === href || localizedPath.startsWith(`${href}/`);
}
