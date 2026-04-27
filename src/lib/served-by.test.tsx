import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { ServedByFooterNote } from "../components/served-by";
import { resolveServedByHostId } from "./served-by";

describe("served by footer", () => {
  it("prefers the request host ID and falls back to the environment value", () => {
    expect(resolveServedByHostId("fra1::edge-07", "backup-edge")).toBe("fra1::edge-07");
    expect(resolveServedByHostId(null, "backup-edge")).toBe("backup-edge");
    expect(resolveServedByHostId(null, undefined)).toBe("unknown");
  });

  it("renders the Ratio1 credit line with the public host ID", () => {
    const html = renderToStaticMarkup(
      <ServedByFooterNote
        hostId="fra1::edge-07"
        brandPosition="start"
        label="edge node serving this site:"
      />
    );

    expect(html).toContain("Ratio1");
    expect(html).toContain("edge node serving this site:");
    expect(html).toContain("fra1::edge-07");
  });

  it("supports Romanian copy with Ratio1 at the end of the phrase", () => {
    const html = renderToStaticMarkup(
      <ServedByFooterNote
        hostId="fra1::edge-07"
        brandSuffix="care serveste acest site:"
        brandPosition="end"
        label="Edge nodul"
      />
    );

    expect(html).toContain("Edge nodul");
    expect(html).toContain("Ratio1");
    expect(html).toContain("care serveste acest site:");
    expect(html.indexOf("Edge nodul")).toBeLessThan(html.indexOf("Ratio1"));
    expect(html.indexOf("Ratio1")).toBeLessThan(html.indexOf("care serveste acest site:"));
    expect(html).toContain("fra1::edge-07");
  });
});
