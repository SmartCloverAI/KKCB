import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it, vi } from "vitest";

import type { BlogPostSummary } from "@/lib/content";

const posts: BlogPostSummary[] = [
  {
    slug: "eu-research-roadmap",
    locale: "en",
    title: "EU Research Roadmap",
    publishedAt: "2026-04-17",
    excerpt: "How the Romanian chapter can frame evidence-led projects."
  },
  {
    slug: "voluntariat-la-pat",
    locale: "ro",
    title: "Voluntariat la patul copilului",
    publishedAt: "2026-04-21",
    excerpt: "Ce inseamna o interventie cu Budo in spital."
  },
  {
    slug: "fundraising-playbook",
    locale: "en",
    title: "Fundraising Playbook",
    publishedAt: "2026-03-12",
    excerpt: "Community campaigns that fit the mission."
  }
];

const projectRoot = process.cwd();

async function importContent(cwd = projectRoot) {
  process.chdir(cwd);
  vi.resetModules();
  return import("@/lib/content");
}

async function withBlogFixture<T>(
  files: Record<string, string>,
  callback: (content: Awaited<ReturnType<typeof importContent>>) => T | Promise<T>
) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "kkcb-blog-"));

  try {
    for (const [filePath, source] of Object.entries(files)) {
      const absolutePath = path.join(directory, filePath);
      fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
      fs.writeFileSync(absolutePath, source);
    }

    const content = await importContent(directory);
    return await callback(content);
  } finally {
    process.chdir(projectRoot);
    vi.resetModules();
    fs.rmSync(directory, { force: true, recursive: true });
  }
}

afterEach(() => {
  process.chdir(projectRoot);
  vi.resetModules();
});

describe("content helpers", () => {
  it("sorts posts from newest to oldest", async () => {
    const { sortPostsByDate } = await importContent();

    expect(sortPostsByDate(posts).map((post) => post.slug)).toEqual([
      "voluntariat-la-pat",
      "eu-research-roadmap",
      "fundraising-playbook"
    ]);
  });

  it("filters by locale before taking featured posts", async () => {
    const { getFeaturedPosts } = await importContent();

    expect(getFeaturedPosts(posts, "en", 2).map((post) => post.slug)).toEqual([
      "eu-research-roadmap",
      "fundraising-playbook"
    ]);

    expect(getFeaturedPosts(posts, "ro", 2).map((post) => post.slug)).toEqual([
      "voluntariat-la-pat"
    ]);
  });

  it("throws clear errors for missing or invalid required frontmatter strings", async () => {
    const invalidPosts = [
      {
        field: "title",
        source: `---
excerpt: Valid excerpt
publishedAt: "2026-04-21"
author: Test Author
---

Body.`
      },
      {
        field: "excerpt",
        source: `---
title: Valid title
excerpt:
  - Invalid excerpt
publishedAt: "2026-04-21"
author: Test Author
---

Body.`
      },
      {
        field: "publishedAt",
        source: `---
title: Valid title
excerpt: Valid excerpt
publishedAt:
  - "2026-04-21"
author: Test Author
---

Body.`
      },
      {
        field: "author",
        source: `---
title: Valid title
excerpt: Valid excerpt
publishedAt: "2026-04-21"
author: ""
---

Body.`
      }
    ];

    for (const { field, source } of invalidPosts) {
      await withBlogFixture(
        { [`content/blog/en/invalid-${field}.md`]: source },
        ({ getAllPostSummaries }) => {
          expect(() => getAllPostSummaries("en")).toThrow(
            new RegExp(`content/blog/en/invalid-${field}\\.md.*${field}`)
          );
        }
      );
    }
  });

  it("exposes blog translation metadata, localized category, and tags", async () => {
    const { getAllPostSummaries, getPostBySlug } = await importContent();
    const englishSummary = getAllPostSummaries("en").find(
      (post) => post.slug === "bedside-volunteering"
    ) as BlogPostSummary & {
      category?: string;
      tags?: string[];
      translationKey?: string;
    };
    const romanianPost = getPostBySlug("ro", "bedside-volunteering");

    expect(englishSummary).toMatchObject({
      translationKey: "bedside-volunteering",
      category: "Volunteering",
      tags: ["bedside care", "volunteers", "Budo"]
    });
    expect(romanianPost).toMatchObject({
      translationKey: "bedside-volunteering",
      category: "Voluntariat",
      tags: ["la patul copilului", "voluntari", "Budo"]
    });
  });

  it("keeps bilingual blog posts paired by translationKey and publish date", async () => {
    const { getAllPostSummaries } = await importContent();
    const summaries = [
      ...getAllPostSummaries("en"),
      ...getAllPostSummaries("ro")
    ] as Array<BlogPostSummary & { translationKey?: string }>;
    const pairs = new Map<
      string,
      { en?: BlogPostSummary; ro?: BlogPostSummary }
    >();

    for (const post of summaries) {
      const translationKey = post.translationKey;
      expect(translationKey).toEqual(expect.any(String));

      if (!translationKey) {
        throw new Error(`Missing translationKey for ${post.locale}/${post.slug}`);
      }

      const pair = pairs.get(translationKey) ?? {};
      pair[post.locale] = post;
      pairs.set(translationKey, pair);
    }

    expect(
      [...pairs.entries()].map(([translationKey, pair]) => ({
        translationKey,
        locales: Object.keys(pair).sort(),
        publishedDates: [...new Set(Object.values(pair).map((post) => post.publishedAt))]
      }))
    ).toEqual([
      {
        translationKey: "bedside-volunteering",
        locales: ["en", "ro"],
        publishedDates: ["2026-04-21"]
      },
      {
        translationKey: "eu-research-roadmap",
        locales: ["en", "ro"],
        publishedDates: ["2026-04-17"]
      },
      {
        translationKey: "fundraising-with-purpose",
        locales: ["en", "ro"],
        publishedDates: ["2026-04-12"]
      }
    ]);
  });

  it("rejects raw HTML in Markdown posts before rendering", async () => {
    await withBlogFixture(
      {
        "content/blog/en/raw-html.md": `---
title: Raw HTML sample
excerpt: Valid excerpt
publishedAt: "2026-04-21"
author: Test Author
---

This Markdown contains <strong>raw HTML</strong>.`
      },
      ({ getPostBySlug }) => {
        expect(() => getPostBySlug("en", "raw-html")).toThrow(
          /content\/blog\/en\/raw-html\.md.*raw HTML/i
        );
      }
    );
  });
});
