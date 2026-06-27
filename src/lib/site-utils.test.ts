import { describe, expect, it } from "vitest";

import {
  REQUEST_PATH_HEADER,
  getCanonicalUrl,
  getLocaleFromPathname,
  getLocaleTagFromHeaders,
  getLocaleTagFromPathname
} from "@/lib/site-utils";

describe("site utilities", () => {
  it("builds canonical URLs from the real public deployment domain", () => {
    expect(getCanonicalUrl("ro")).toBe("https://kkc-romania.org/ro");
    expect(getCanonicalUrl("en", "/contact")).toBe(
      "https://kkc-romania.org/en/contact"
    );
  });

  it("reads the locale from localized pathnames", () => {
    expect(getLocaleFromPathname("/ro")).toBe("ro");
    expect(getLocaleFromPathname("/ro/blog/bedside-volunteering")).toBe("ro");
    expect(getLocaleFromPathname("/en/research")).toBe("en");
  });

  it("falls back to Romanian for unlocalized pathnames", () => {
    expect(getLocaleFromPathname("/missing-page")).toBe("ro");
    expect(getLocaleFromPathname("")).toBe("ro");
  });

  it("returns document language tags for request pathnames", () => {
    expect(getLocaleTagFromPathname("/ro/about")).toBe("ro-RO");
    expect(getLocaleTagFromPathname("/en/about")).toBe("en");
  });

  it("returns document language tags from middleware request headers", () => {
    const headers = new Headers({
      [REQUEST_PATH_HEADER]: "/ro/blog/fundraising-with-purpose"
    });

    expect(getLocaleTagFromHeaders(headers)).toBe("ro-RO");
  });
});
