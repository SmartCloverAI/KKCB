import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

function runGit(args) {
  try {
    return execFileSync("git", args, {
      cwd: root,
      encoding: "utf8"
    }).trim();
  } catch {
    return "";
  }
}

function normalizeChangedFiles(changedFiles) {
  return [...new Set(changedFiles.map((file) => file.trim()).filter(Boolean))].filter(
    (file) =>
      !file.startsWith(".next/") &&
      !file.startsWith("node_modules/") &&
      !file.endsWith(".tsbuildinfo")
  );
}

const trackedChanges = runGit(["diff", "--name-only", "HEAD", "--", "."])
  .split("\n")
  .filter(Boolean);
const untrackedChanges = runGit(["ls-files", "--others", "--exclude-standard"])
  .split("\n")
  .filter(Boolean);
const changedFiles = normalizeChangedFiles([...trackedChanges, ...untrackedChanges]);

if (changedFiles.length === 0) {
  console.log("No repository changes detected.");
  process.exit(0);
}

const packageJson = JSON.parse(
  await fs.readFile(path.join(root, "package.json"), "utf8")
);
const lockfile = JSON.parse(
  await fs.readFile(path.join(root, "package-lock.json"), "utf8")
);

const previousPackageJson = runGit(["show", "HEAD:package.json"]);
const previousVersion = previousPackageJson
  ? JSON.parse(previousPackageJson).version
  : null;

if (previousVersion && packageJson.version === previousVersion) {
  console.error(
    `Version bump required: repository changed but package.json is still ${packageJson.version}.`
  );
  process.exit(1);
}

const lockVersion = lockfile.version;
const rootLockVersion = lockfile.packages?.[""]?.version;

if (lockVersion !== packageJson.version || rootLockVersion !== packageJson.version) {
  console.error(
    `package-lock.json is out of sync with package.json (${packageJson.version}).`
  );
  process.exit(1);
}

console.log(`Version rule satisfied: ${packageJson.version}`);
