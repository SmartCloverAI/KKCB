import { describe, expect, it } from "vitest";

import { metadata } from "@/app/layout";

describe("root metadata", () => {
  it("wires the favicon set and web manifest from public assets", () => {
    expect(metadata.manifest).toBe("/site.webmanifest");
    expect(metadata.icons).toEqual({
      apple: [
        {
          sizes: "180x180",
          type: "image/png",
          url: "/apple-touch-icon.png"
        }
      ],
      icon: [
        { url: "/favicon.ico" },
        {
          sizes: "16x16",
          type: "image/png",
          url: "/favicon-16x16.png"
        },
        {
          sizes: "32x32",
          type: "image/png",
          url: "/favicon-32x32.png"
        }
      ]
    });
  });
});
