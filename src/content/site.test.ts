import { describe, expect, it } from "vitest";

import { siteContent } from "@/content/site";

describe("site content governance", () => {
  it("keeps the NGO name separate from Romania context", () => {
    const serializedContent = JSON.stringify(siteContent);

    expect(serializedContent).not.toContain("Kids Kicking Cancer with Budo Romania");

    for (const dictionary of Object.values(siteContent)) {
      expect(dictionary.brand.name).toBe("Kids Kicking Cancer with Budo");
      expect(dictionary.brand.chapter).not.toBe("Romania");
    }
  });

  it("uses the official tagline in both locales", () => {
    expect(siteContent.ro.brand.tagline).toBe("Power Peace Purpose");
    expect(siteContent.en.brand.tagline).toBe("Power Peace Purpose");
  });

  it("publishes the verified bank transfer details on the involvement page", () => {
    for (const dictionary of Object.values(siteContent)) {
      expect(dictionary.pages.getInvolved.bank.holder).toBe(
        "KIDS KICKING CANCER with BUDO"
      );
      expect(dictionary.pages.getInvolved.bank.iban).toBe(
        "RO83 RNCB 0082 1852 9530 0001"
      );
      expect(dictionary.pages.getInvolved.bank.bic).toBe("RNCBROBU");
    }
  });
});
