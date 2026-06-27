import fs from "node:fs";
import path from "node:path";

import type { MetadataRoute } from "next";

import { locales, type Locale } from "@/lib/i18n";
import { getCanonicalUrl } from "@/lib/site-utils";

const primaryRoutes = [
  "",
  "/about",
  "/method",
  "/research",
  "/get-involved",
  "/blog",
  "/contact"
] as const;

const blogRoot = path.join(process.cwd(), "content", "blog");

function getBlogSlugs(locale: Locale) {
  const directory = path.join(blogRoot, locale);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
    .sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const primaryEntries = locales.flatMap((locale) =>
    primaryRoutes.map((href) => ({
      url: getCanonicalUrl(locale, href)
    }))
  );

  const blogEntries = locales.flatMap((locale) =>
    getBlogSlugs(locale).map((slug) => ({
      url: getCanonicalUrl(locale, `/blog/${slug}`)
    }))
  );

  return [...primaryEntries, ...blogEntries];
}
