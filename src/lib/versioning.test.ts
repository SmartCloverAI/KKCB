import { describe, expect, it } from "vitest";

import {
  getVersionLabel,
  hasVersionedChanges,
  isVersionBumpSatisfied,
  normalizeChangedFiles
} from "@/lib/versioning";

describe("versioning helpers", () => {
  it("formats a footer-friendly version label", () => {
    expect(getVersionLabel("0.1.1")).toBe("v0.1.1");
  });

  it("normalizes changed paths before applying the version rule", () => {
    expect(
      normalizeChangedFiles(["README.md", "", "package.json", ".next/cache/x", "README.md"])
    ).toEqual(["README.md", "package.json"]);
  });

  it("treats any meaningful repo change as version-relevant", () => {
    expect(hasVersionedChanges(["README.md"])).toBe(true);
    expect(hasVersionedChanges(["package.json", "package-lock.json"])).toBe(true);
    expect(hasVersionedChanges([".next/cache/x", ""])).toBe(false);
  });

  it("accepts a changed version and rejects an unchanged one when files changed", () => {
    expect(isVersionBumpSatisfied("0.1.1", "0.1.0", ["README.md"])).toBe(true);
    expect(isVersionBumpSatisfied("0.1.0", "0.1.0", ["README.md"])).toBe(false);
    expect(isVersionBumpSatisfied("0.1.0", "0.1.0", [])).toBe(true);
  });
});
