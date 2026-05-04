import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { PageHero } from "@/components/site-ui";

describe("PageHero", () => {
  it("renders the shared centered hero variant for inner pages", () => {
    const html = renderToStaticMarkup(
      <PageHero
        lede="Therapeutic martial arts explained with clarity and care."
        title="About the method"
      />
    );

    expect(html).toContain('class="page-hero page-hero--centered"');
    expect(html).toContain('class="page-hero__inner page-hero__inner--centered"');
  });
});
