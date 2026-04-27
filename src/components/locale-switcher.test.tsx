import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  usePathname: () => "/ro/about"
}));

import { LocaleSwitcher } from "./locale-switcher";

describe("LocaleSwitcher", () => {
  it("renders the alternate locale as a pill link", () => {
    const html = renderToStaticMarkup(<LocaleSwitcher locale="ro" />);

    expect(html).toContain('href="/en/about"');
    expect(html).toContain("locale-switch locale-switch--pill");
    expect(html).toContain(">EN<");
  });
});
