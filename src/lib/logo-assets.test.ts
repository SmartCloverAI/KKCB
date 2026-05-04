import { readFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";
import { describe, expect, it } from "vitest";

async function measureVisibleBounds(assetPath: string) {
  const { data, info } = await sharp(assetPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let minX = info.width;
  let maxX = -1;
  let minY = info.height;
  let maxY = -1;

  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const offset = (y * info.width + x) * info.channels;
      const red = data[offset] ?? 255;
      const green = data[offset + 1] ?? 255;
      const blue = data[offset + 2] ?? 255;
      const alpha = data[offset + 3] ?? 255;

      if (alpha > 16 && (red < 246 || green < 246 || blue < 246)) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    }
  }

  return {
    centerOffsetX: (minX + maxX) / 2 - info.width / 2,
    edgeMargins: {
      bottom: info.height - 1 - maxY,
      left: minX,
      right: info.width - 1 - maxX,
      top: minY
    },
    height: info.height,
    width: info.width
  };
}

describe("header logo asset", () => {
  it("keeps the visible mark centered inside its round background", async () => {
    const headerSource = await readFile(
      path.join(process.cwd(), "src/components/header-nav.tsx"),
      "utf8"
    );
    const sourceMatch = headerSource.match(/src="(?<source>\/media\/[^"]*mark[^"]*\.webp)"/);

    expect(sourceMatch?.groups?.source).toBeDefined();

    const assetPath = path.join(process.cwd(), "public", sourceMatch!.groups!.source.slice(1));
    const bounds = await measureVisibleBounds(assetPath);

    expect(Math.abs(bounds.centerOffsetX)).toBeLessThanOrEqual(12);
    expect(bounds.edgeMargins.left).toBeGreaterThanOrEqual(28);
    expect(bounds.edgeMargins.right).toBeGreaterThanOrEqual(28);
  });
});
