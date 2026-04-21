const IGNORED_PREFIXES = [".next/", "node_modules/"];
const IGNORED_SUFFIXES = [".tsbuildinfo"];

export function normalizeChangedFiles(changedFiles: string[]) {
  return [...new Set(changedFiles.map((file) => file.trim()).filter(Boolean))].filter(
    (file) =>
      !IGNORED_PREFIXES.some((prefix) => file.startsWith(prefix)) &&
      !IGNORED_SUFFIXES.some((suffix) => file.endsWith(suffix))
  );
}

export function hasVersionedChanges(changedFiles: string[]) {
  return normalizeChangedFiles(changedFiles).length > 0;
}

export function isVersionBumpSatisfied(
  currentVersion: string,
  previousVersion: string | null | undefined,
  changedFiles: string[]
) {
  if (!hasVersionedChanges(changedFiles) || !previousVersion) {
    return true;
  }

  return currentVersion !== previousVersion;
}

export function getVersionLabel(version: string) {
  return `v${version}`;
}
