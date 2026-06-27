import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { siteContent } from "@/content/site";
import type { SiteDictionary } from "@/content/site";

const ethicsHref = "/documents/codul-de-etica-kkcb-ro-2026-05-16.pdf";
const applicationHref = "/documents/cerere-voluntar-membru-kkcb-ro-2026-05-16.pdf";

type ExpectedDocument = {
  title: string;
  description: string;
  href: string;
  fileType: string;
  language: string;
  date: string;
  downloadLabel: string;
};

type DocumentSection = {
  title: string;
  intro: string;
  warning?: string;
  items: ExpectedDocument[];
};

type GovernanceSection = {
  title: string;
  body: string;
  items: ExpectedDocument[];
};

type BankTrustContent = SiteDictionary["pages"]["getInvolved"]["bank"] & {
  trustTitle?: string;
  trustBody?: string;
};

function documentPath(href: string) {
  return path.join(process.cwd(), "public", href.replace(/^\//, ""));
}

describe("site content governance", () => {
  it("keeps the NGO name separate from Romania context", () => {
    const serializedContent = JSON.stringify(siteContent);

    expect(serializedContent).not.toContain("Kids Kicking Cancer with Budo Romania");
    expect(serializedContent).not.toContain("Capitolul din Romania");
    expect(serializedContent).not.toContain("The Romanian chapter brings");

    for (const dictionary of Object.values(siteContent)) {
      expect(dictionary.brand.name).toBe("Kids Kicking Cancer with Budo");
      expect(dictionary.brand.chapter).not.toBe("Romania");
    }
  });

  it("uses city and country as the visible brand location line", () => {
    expect(siteContent.ro.brand.chapter).toBe("București, România");
    expect(siteContent.en.brand.chapter).toBe("Bucharest, Romania");
  });

  it("uses polished Romanian labels for high-trust surfaces", () => {
    expect(siteContent.ro.evidence.linkLabel).toBe("Vezi referința");
    expect(siteContent.ro.pages.getInvolved.documents.warning).toContain(
      "conțin date personale"
    );
    expect(siteContent.ro.pages.getInvolved.documents.items[0]).toMatchObject({
      date: "16 mai 2026",
      downloadLabel: "Descarcă PDF",
      language: "română"
    });
    expect(siteContent.ro.pages.contact.governance.title).toBe(
      "Standarde de guvernanță"
    );
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

  it("adds a polite involvement CTA for inner pages", () => {
    for (const dictionary of Object.values(siteContent)) {
      expect(dictionary.innerCta.action.href).toBe("/get-involved");
      expect(dictionary.innerCta.action.variant).toBe("primary");
      expect(dictionary.innerCta.title.length).toBeGreaterThan(10);
      expect(dictionary.innerCta.body.length).toBeGreaterThan(20);
    }
  });

  it("publishes scrubbed public PDF documents without named author metadata", () => {
    const ethicsPath = documentPath(ethicsHref);
    const applicationPath = documentPath(applicationHref);

    expect(existsSync(ethicsPath)).toBe(true);
    expect(existsSync(applicationPath)).toBe(true);

    const ethicsBytes = readFileSync(ethicsPath, "latin1");
    const applicationBytes = readFileSync(applicationPath, "latin1");

    expect(ethicsBytes).not.toContain("Nicola Bucataru");
    expect(ethicsBytes).not.toContain("Microsoft® Word 2016");
    expect(applicationBytes).not.toContain("Nicola Bucataru");
  });

  it("adds bilingual document metadata for contact and involvement pages", () => {
    const roContact = siteContent.ro.pages.contact as SiteDictionary["pages"]["contact"] & {
      governance?: GovernanceSection;
    };
    const enContact = siteContent.en.pages.contact as SiteDictionary["pages"]["contact"] & {
      governance?: GovernanceSection;
    };
    const roInvolved = siteContent.ro.pages.getInvolved as SiteDictionary["pages"]["getInvolved"] & {
      documents?: DocumentSection;
    };
    const enInvolved = siteContent.en.pages.getInvolved as SiteDictionary["pages"]["getInvolved"] & {
      documents?: DocumentSection;
    };

    expect(roContact.governance?.items.map((item) => item.href)).toEqual([ethicsHref]);
    expect(enContact.governance?.items.map((item) => item.href)).toEqual([ethicsHref]);
    expect(roInvolved.documents?.items.map((item) => item.href)).toEqual([
      ethicsHref,
      applicationHref
    ]);
    expect(enInvolved.documents?.items.map((item) => item.href)).toEqual([
      ethicsHref,
      applicationHref
    ]);

    expect(roInvolved.documents?.items[0]).toMatchObject({
      fileType: "PDF",
      language: "română",
      date: "16 mai 2026",
      downloadLabel: "Descarcă PDF"
    });
    expect(enInvolved.documents?.items[0]).toMatchObject({
      fileType: "PDF",
      language: "Romanian",
      date: "16 May 2026",
      downloadLabel: "Download PDF"
    });
    expect(enInvolved.documents?.items.every((item) => item.description.includes("Romanian"))).toBe(
      true
    );
  });

  it("warns that completed application forms contain personal data", () => {
    const roInvolved = siteContent.ro.pages.getInvolved as SiteDictionary["pages"]["getInvolved"] & {
      documents?: DocumentSection;
    };
    const enInvolved = siteContent.en.pages.getInvolved as SiteDictionary["pages"]["getInvolved"] & {
      documents?: DocumentSection;
    };

    expect(roInvolved.documents?.warning).toBeDefined();
    expect(enInvolved.documents?.warning).toBeDefined();
    expect(roInvolved.documents?.warning ?? "").toContain("date personale");
    expect(roInvolved.documents?.warning ?? "").toContain("procesul confirmat");
    expect(enInvolved.documents?.warning ?? "").toContain("personal data");
    expect(enInvolved.documents?.warning ?? "").toContain("confirmed process");
  });

  it("explains what bank transfers support without inventing unverified donation flows", () => {
    const expectations = [
      {
        bank: siteContent.ro.pages.getInvolved.bank as BankTrustContent,
        terms: ["voluntarilor", "formarea", "documentarea", "cercetare"]
      },
      {
        bank: siteContent.en.pages.getInvolved.bank as BankTrustContent,
        terms: ["volunteer", "training", "documentation", "research"]
      }
    ];

    for (const { bank, terms } of expectations) {
      const copy = `${bank.trustTitle ?? ""} ${bank.trustBody ?? ""}`;

      for (const term of terms) {
        expect(copy).toContain(term);
      }

      expect(copy).not.toMatch(/https?:\/\//);
      expect(copy).not.toContain("@");
      expect(copy).not.toMatch(/receipt|chitanta|deduct|deducere/i);
    }
  });
});
