import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const root = process.cwd();
const manifestPath = path.join(root, "content", "media-manifest.json");
const outputRoot = path.join(root, "public");

const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));

const widthsByCategory = {
  archive: 1600,
  community: 1800,
  program: 2200,
  story: 2000
};

for (const entry of manifest) {
  const input = path.join(root, entry.source);
  const output = path.join(outputRoot, entry.src.replace(/^\//, ""));

  await fs.mkdir(path.dirname(output), { recursive: true });

  await sharp(input)
    .rotate()
    .resize({
      width: widthsByCategory[entry.category] ?? 1800,
      withoutEnlargement: true
    })
    .jpeg({
      quality: 84,
      mozjpeg: true,
      progressive: true
    })
    .toFile(output);

  console.log(`processed ${entry.originalFilename} -> ${path.relative(root, output)}`);
}
