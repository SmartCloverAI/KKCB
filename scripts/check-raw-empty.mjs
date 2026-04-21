import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const rawDir = path.join(root, "_raw");

const entries = await fs.readdir(rawDir, { withFileTypes: true });
const unexpected = entries
  .filter((entry) => entry.name !== ".gitkeep")
  .map((entry) => entry.name);

if (unexpected.length > 0) {
  console.error("_raw must stay empty in the curated repo state.");
  console.error("Move imported files into assets/originals/* and re-run media processing.");
  console.error(`Found: ${unexpected.join(", ")}`);
  process.exit(1);
}

console.log("_raw is clean.");
