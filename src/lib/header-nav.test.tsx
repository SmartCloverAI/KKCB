import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import {
  HeaderMenuButton,
  HeaderNavigationMenu
} from "../components/header-nav";
import {
  getHeaderMenuButtonLabel,
  isNavigationItemActive
} from "./header-nav";

describe("header navigation helpers", () => {
  it("returns English button labels for open and closed states", () => {
    expect(getHeaderMenuButtonLabel("en", false)).toBe("Open navigation menu");
    expect(getHeaderMenuButtonLabel("en", true)).toBe("Close navigation menu");
  });

  it("returns Romanian button labels for open and closed states", () => {
    expect(getHeaderMenuButtonLabel("ro", false)).toBe(
      "Deschide meniul de navigare"
    );
    expect(getHeaderMenuButtonLabel("ro", true)).toBe(
      "Închide meniul de navigare"
    );
  });

  it("matches localized root and section routes without false positives", () => {
    expect(isNavigationItemActive("/ro", "/")).toBe(true);
    expect(isNavigationItemActive("/ro/about", "/about")).toBe(true);
    expect(isNavigationItemActive("/ro/about/team", "/about")).toBe(true);
    expect(isNavigationItemActive("/ro/research", "/about")).toBe(false);
  });

  it("renders an accessible sandwich trigger", () => {
    const html = renderToStaticMarkup(
      <HeaderMenuButton expanded={false} label="Open navigation menu" />
    );

    expect(html).toContain('aria-expanded="false"');
    expect(html).toContain("Open navigation menu");
  });

  it("renders desktop and mobile navigation structures", () => {
    const html = renderToStaticMarkup(
      <>
        <HeaderNavigationMenu
          className="site-header__desktop-nav"
          currentPathname="/en/about"
          items={[
            { href: "/about", label: "About" },
            { href: "/method", label: "Method" }
          ]}
          locale="en"
        />
        <HeaderNavigationMenu
          className="site-header__mobile-sheet"
          currentPathname="/en/about"
          items={[
            { href: "/about", label: "About" },
            { href: "/method", label: "Method" }
          ]}
          locale="en"
          navId="site-mobile-nav"
          stacked
        />
      </>
    );

    expect(html).toContain("site-header__desktop-nav");
    expect(html).toContain("site-mobile-nav");
    expect(html).toContain("site-nav__link--active");
  });

  it("marks the active navigation link as the current page", () => {
    const html = renderToStaticMarkup(
      <HeaderNavigationMenu
        currentPathname="/en/about"
        items={[
          { href: "/about", label: "About" },
          { href: "/method", label: "Method" }
        ]}
        locale="en"
      />
    );

    expect(html).toMatch(
      /<a(?=[^>]*href="\/en\/about")(?=[^>]*aria-current="page")[^>]*>/
    );
    expect(html).not.toMatch(
      /<a(?=[^>]*href="\/en\/method")(?=[^>]*aria-current="page")[^>]*>/
    );
  });
});
