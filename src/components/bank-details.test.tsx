import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { BankDetails } from "@/components/bank-details";
import { siteContent } from "@/content/site";

describe("BankDetails", () => {
  it("renders a copy button for each transfer field", () => {
    const html = renderToStaticMarkup(<BankDetails bank={siteContent.ro.pages.getInvolved.bank} />);

    expect(html).toContain("bank-details__row--primary");
    expect(html).toContain("Copiază IBAN");
    expect(html).toContain("Copiază Titular cont");
    expect(html).toContain("Copiază BIC/SWIFT");
  });
});
