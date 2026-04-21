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

  it("keeps approved and quarantined originals in the expected folders", () => {
    const reviewEntries = mediaReview as ReviewEntry[];
    const approved = reviewEntries.filter((entry) => entry.status === "approved");
    const unapproved = reviewEntries.filter((entry) => entry.status === "unapproved");

    const approvedViolations = approved.flatMap((entry) => {
      const fullPath = path.join(process.cwd(), entry.source);
      return fs.existsSync(fullPath)
        ? []
        : [`missing approved original: ${entry.source}`];
    });

    const quarantineViolations = unapproved.flatMap((entry) => {
      const quarantinedPath = path.join(
        process.cwd(),
        entry.source.replace(/^assets\/originals\//, "_unapproved/")
      );

      return fs.existsSync(quarantinedPath)
        ? []
        : [`missing quarantined original: ${quarantinedPath}`];
    });

    expect([...approvedViolations, ...quarantineViolations]).toEqual([]);
  });
});
