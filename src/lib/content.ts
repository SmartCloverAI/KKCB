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
};

const blogRoot = path.join(process.cwd(), "content", "blog");

marked.setOptions({
  gfm: true,
  breaks: false
});

function getLocaleDirectory(locale: Locale) {
  return path.join(blogRoot, locale);
}

function readMarkdownFile(locale: Locale, slug: string) {
  return fs.readFileSync(path.join(getLocaleDirectory(locale), `${slug}.md`), "utf8");
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
      const source = readMarkdownFile(locale, slug);
      const { data } = matter(source);
      const frontmatter = data as BlogPostFrontmatter;

      return {
        slug,
        locale,
        title: frontmatter.title,
        publishedAt: frontmatter.publishedAt,
        excerpt: frontmatter.excerpt,
        coverId: frontmatter.coverId
      };
    })
  );
}

export function getPostBySlug(locale: Locale, slug: string): BlogPost | null {
  const filePath = path.join(getLocaleDirectory(locale), `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = readMarkdownFile(locale, slug);
  const { data, content } = matter(source);
  const frontmatter = data as BlogPostFrontmatter;

  return {
    slug,
    locale,
    title: frontmatter.title,
    publishedAt: frontmatter.publishedAt,
    excerpt: frontmatter.excerpt,
    author: frontmatter.author,
    coverId: frontmatter.coverId,
    readingTime: readingTime(content).text,
    html: marked.parse(content) as string
  };
}

export function getPostCover(locale: Locale, coverId?: string) {
  return coverId ? getLocalizedMedia(coverId, locale) : null;
}
