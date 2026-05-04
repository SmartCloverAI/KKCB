import { describe, expect, it } from "vitest";

import { getCanonicalUrl } from "@/lib/site-utils";

describe("site utilities", () => {
  it("builds canonical URLs from the real public deployment domain", () => {
    expect(getCanonicalUrl("ro")).toBe("https://kkc-romania.org/ro");
    expect(getCanonicalUrl("en", "/contact")).toBe(
      "https://kkc-romania.org/en/contact"
    );
  });
});
