import { describe, expect, it } from "vitest";

import {
  getFeaturedPosts,
  sortPostsByDate,
  type BlogPostSummary
} from "@/lib/content";

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

describe("content helpers", () => {
  it("sorts posts from newest to oldest", () => {
    expect(sortPostsByDate(posts).map((post) => post.slug)).toEqual([
      "voluntariat-la-pat",
      "eu-research-roadmap",
      "fundraising-playbook"
    ]);
  });

  it("filters by locale before taking featured posts", () => {
    expect(getFeaturedPosts(posts, "en", 2).map((post) => post.slug)).toEqual([
      "eu-research-roadmap",
      "fundraising-playbook"
    ]);

    expect(getFeaturedPosts(posts, "ro", 2).map((post) => post.slug)).toEqual([
      "voluntariat-la-pat"
    ]);
  });
});
