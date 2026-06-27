import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { BlogCard, MediaCard, PageHero, SiteFooter } from "@/components/site-ui";
import { siteContent } from "@/content/site";
import type { BlogPostSummary } from "@/lib/content";

vi.mock("@/components/served-by", () => ({
  ServedByFooter: () => <p className="site-footer__served-by">served by test host</p>
}));

describe("PageHero", () => {
  it("renders the shared centered hero variant for inner pages", () => {
    const html = renderToStaticMarkup(
      <PageHero
        lede="Therapeutic martial arts explained with clarity and care."
        title="About the method"
      />
    );

    expect(html).toContain('class="page-hero page-hero--centered"');
    expect(html).toContain('class="page-hero__inner page-hero__inner--centered"');
  });

  it("renders optional eyebrow, action, and media slots in a split hero", () => {
    const html = renderToStaticMarkup(
      <PageHero
        action={<a href="/research">Read the agenda</a>}
        eyebrow="Research partnerships"
        lede="A clearer invitation for collaborators."
        media={<div data-slot="media">Archive photo</div>}
        title="Partner with the Romanian chapter"
      />
    );

    expect(html).toContain('class="page-hero page-hero--split"');
    expect(html).toContain('class="page-hero__inner page-hero__inner--split"');
    expect(html).toContain("Research partnerships");
    expect(html).toContain('class="page-hero__action"');
    expect(html).toContain('class="page-hero__media"');
    expect(html).toContain('data-slot="media"');
  });
});

describe("shared image loading", () => {
  it("does not eagerly load the footer logo by default", () => {
    const html = renderToStaticMarkup(
      <SiteFooter dictionary={siteContent.ro} versionLabel="1.1.10" />
    );

    expect(html).toContain("kids-kicking-cancer-with-budo-logo-v3.webp");
    expect(html).not.toContain('loading="eager"');
  });

  it("does not eagerly load MediaCard images by default", () => {
    const html = renderToStaticMarkup(<MediaCard id="prayer-hands-bedside" locale="ro" />);

    expect(html).toContain('class="media-card"');
    expect(html).not.toContain('loading="eager"');
  });

  it("does not eagerly load BlogCard cover images by default", () => {
    const post: BlogPostSummary = {
      coverId: "hero-bedside-punch",
      excerpt: "A short post summary.",
      locale: "ro",
      publishedAt: "2026-01-15",
      slug: "sample-post",
      title: "Sample post"
    };
    const html = renderToStaticMarkup(<BlogCard locale="ro" post={post} />);

    expect(html).toContain('class="blog-card__image"');
    expect(html).not.toContain('loading="eager"');
  });
});
