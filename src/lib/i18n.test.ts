import { describe, expect, it } from "vitest";

import {
  defaultLocale,
  getAlternateLocale,
  getLocaleDirection,
  getLocaleUrl,
  isLocale,
  locales
} from "@/lib/i18n";

describe("i18n helpers", () => {
  it("exposes the supported locales and the Romanian default", () => {
    expect(locales).toEqual(["ro", "en"]);
    expect(defaultLocale).toBe("ro");
  });

  it("validates locales and computes alternates", () => {
    expect(isLocale("ro")).toBe(true);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("de")).toBe(false);
    expect(getAlternateLocale("ro")).toBe("en");
    expect(getAlternateLocale("en")).toBe("ro");
  });

  it("builds locale urls without double slashes", () => {
    expect(getLocaleUrl("ro")).toBe("/ro");
    expect(getLocaleUrl("en", "/blog")).toBe("/en/blog");
    expect(getLocaleUrl("ro", "contact")).toBe("/ro/contact");
  });

  it("returns the correct document direction", () => {
    expect(getLocaleDirection("ro")).toBe("ltr");
    expect(getLocaleDirection("en")).toBe("ltr");
  });
});
