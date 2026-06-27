import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import mediaManifest from "../../content/media-manifest.json";
import mediaReview from "../../content/media-review.json";

type ReviewEntry = {
  source: string;
  status: "approved" | "unapproved";
  reason: string;
};

describe("media approval review", () => {
  it("uses only approved originals in the public media manifest", () => {
    const reviewBySource = new Map(
      (mediaReview as ReviewEntry[]).map((entry) => [entry.source, entry])
    );

    const violations = (mediaManifest as Array<{ id: string; source: string }>).flatMap(
      (entry) => {
        const review = reviewBySource.get(entry.source);

        if (!review) {
          return [`${entry.id}: missing review for ${entry.source}`];
        }

        if (review.status !== "approved") {
          return [`${entry.id}: ${entry.source} is ${review.status}`];
        }

        return [];
      }
    );

    expect(violations).toEqual([]);
  });

  it("keeps approved originals present and non-approved originals out of public media", () => {
    const reviewEntries = mediaReview as ReviewEntry[];
    const approved = reviewEntries.filter((entry) => entry.status === "approved");
    const unapproved = reviewEntries.filter((entry) => entry.status === "unapproved");

    const approvedViolations = approved.flatMap((entry) => {
      const fullPath = path.join(process.cwd(), entry.source);
      return fs.existsSync(fullPath)
        ? []
        : [`missing approved original: ${entry.source}`];
    });

    const publicMedia = new Set(
      (mediaManifest as Array<{ source: string }>).map((entry) => entry.source)
    );

    const unapprovedViolations = unapproved.flatMap((entry) => {
      const approvedOriginalPath = path.join(process.cwd(), entry.source);
      const quarantineSource = entry.source.replace(/^assets\/originals\//, "_unapproved/");
      const publicPath = path.join(
        process.cwd(),
        "public",
        "media",
        path.basename(entry.source)
      );

      return [
        fs.existsSync(approvedOriginalPath)
          ? `${entry.source} is still in approved originals`
          : null,
        publicMedia.has(entry.source)
          ? `${entry.source} appears in public media manifest`
          : null,
        fs.existsSync(publicPath)
          ? `${entry.source} appears in public media output`
          : null,
        quarantineSource === entry.source
          ? `${entry.source} does not map to quarantine path`
          : null
      ].filter(Boolean);
    });

    expect([...approvedViolations, ...unapprovedViolations]).toEqual([]);
  });
});
