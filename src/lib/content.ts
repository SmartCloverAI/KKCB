import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { marked } from "marked";
import readingTime from "reading-time";

import { getLocalizedMedia } from "@/content/media";
import type { Locale } from "@/lib/i18n";

export type BlogPostSummary = {
  slug: string;
  locale: Locale;
  title: string;
  publishedAt: string;
  excerpt: string;
  coverId?: string;
  translationKey?: string;
  category?: string;
  tags?: string[];
};

export type BlogPost = BlogPostSummary & {
  author: string;
  readingTime: string;
  html: string;
};

type BlogPostFrontmatter = {
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  coverId?: string;
  translationKey?: string;
  category?: string;
  tags?: string[];
};

const blogRoot = path.join(process.cwd(), "content", "blog");
const requiredStringFields = ["title", "excerpt", "publishedAt", "author"] as const;
const rawHtmlPattern = /<!--[\s\S]*?-->|<\/?[A-Za-z][\w:-]*(?:\s[^<>]*)?>/;

marked.setOptions({
  gfm: true,
  breaks: false
});

function getLocaleDirectory(locale: Locale) {
  return path.join(blogRoot, locale);
}

function getMarkdownFilePath(locale: Locale, slug: string) {
  return path.join(getLocaleDirectory(locale), `${slug}.md`);
}

function readMarkdownFile(locale: Locale, slug: string) {
  return fs.readFileSync(getMarkdownFilePath(locale, slug), "utf8");
}

function readDirectory(locale: Locale) {
  const directory = getLocaleDirectory(locale);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function isFrontmatterRecord(data: unknown): data is Record<string, unknown> {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}

function frontmatterError(filePath: string, field: string, expectation: string) {
  return new Error(
    `Invalid blog frontmatter in ${filePath}: "${field}" ${expectation}.`
  );
}

function requiredString(
  data: Record<string, unknown>,
  field: (typeof requiredStringFields)[number],
  filePath: string
) {
  const value = data[field];

  if (typeof value !== "string" || value.trim() === "") {
    throw frontmatterError(filePath, field, "must be a non-empty string");
  }

  return value;
}

function optionalString(
  data: Record<string, unknown>,
  field: "category" | "coverId" | "translationKey",
  filePath: string
) {
  const value = data[field];

  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "string" || value.trim() === "") {
    throw frontmatterError(filePath, field, "must be a non-empty string when present");
  }

  return value;
}

function optionalStringArray(
  data: Record<string, unknown>,
  field: "tags",
  filePath: string
) {
  const value = data[field];

  if (value === undefined) {
    return undefined;
  }

  if (
    !Array.isArray(value) ||
    value.some((item) => typeof item !== "string" || item.trim() === "")
  ) {
    throw frontmatterError(
      filePath,
      field,
      "must be an array of non-empty strings when present"
    );
  }

  return value;
}

function validateFrontmatter(data: unknown, filePath: string): BlogPostFrontmatter {
  const frontmatter = isFrontmatterRecord(data) ? data : {};

  return {
    title: requiredString(frontmatter, "title", filePath),
    excerpt: requiredString(frontmatter, "excerpt", filePath),
    publishedAt: requiredString(frontmatter, "publishedAt", filePath),
    author: requiredString(frontmatter, "author", filePath),
    coverId: optionalString(frontmatter, "coverId", filePath),
    translationKey: optionalString(frontmatter, "translationKey", filePath),
    category: optionalString(frontmatter, "category", filePath),
    tags: optionalStringArray(frontmatter, "tags", filePath)
  };
}

function assertNoRawHtml(content: string, filePath: string) {
  const match = content.match(rawHtmlPattern);

  if (match) {
    throw new Error(
      `Invalid blog Markdown in ${filePath}: raw HTML is not allowed (${match[0]}).`
    );
  }
}

export function sortPostsByDate<T extends { publishedAt: string }>(posts: T[]): T[] {
  return [...posts].sort((left, right) => {
    return (
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
    );
  });
}

export function getFeaturedPosts(
  posts: BlogPostSummary[],
  locale: Locale,
  limit: number
) {
  return sortPostsByDate(posts.filter((post) => post.locale === locale)).slice(0, limit);
}

export function getAllPostSummaries(locale: Locale): BlogPostSummary[] {
  const slugs = readDirectory(locale);

  return sortPostsByDate(
    slugs.map((slug) => {
      const filePath = getMarkdownFilePath(locale, slug);
      const source = readMarkdownFile(locale, slug);
      const { data } = matter(source);
      const frontmatter = validateFrontmatter(data, filePath);

      return {
        slug,
        locale,
        title: frontmatter.title,
        publishedAt: frontmatter.publishedAt,
        excerpt: frontmatter.excerpt,
        coverId: frontmatter.coverId,
        translationKey: frontmatter.translationKey,
        category: frontmatter.category,
        tags: frontmatter.tags
      };
    })
  );
}

export function getPostBySlug(locale: Locale, slug: string): BlogPost | null {
  const filePath = getMarkdownFilePath(locale, slug);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = readMarkdownFile(locale, slug);
  const { data, content } = matter(source);
  const frontmatter = validateFrontmatter(data, filePath);

  assertNoRawHtml(content, filePath);

  return {
    slug,
    locale,
    title: frontmatter.title,
    publishedAt: frontmatter.publishedAt,
    excerpt: frontmatter.excerpt,
    author: frontmatter.author,
    coverId: frontmatter.coverId,
    translationKey: frontmatter.translationKey,
    category: frontmatter.category,
    tags: frontmatter.tags,
    readingTime: readingTime(content).text,
    html: marked.parse(content) as string
  };
}

export function getPostCover(locale: Locale, coverId?: string) {
  return coverId ? getLocalizedMedia(coverId, locale) : null;
}
