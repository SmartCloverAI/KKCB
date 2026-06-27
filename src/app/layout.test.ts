import { PassThrough } from "node:stream";
import React from "react";
import { renderToPipeableStream, renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

const requestState = vi.hoisted(() => ({
  pathname: "/ro"
}));

vi.mock("next/font/google", () => ({
  Newsreader: () => ({ variable: "font-body" }),
  Sora: () => ({ variable: "font-display" })
}));

vi.mock("next/image", async () => {
  const { createElement } = await import("react");

  return {
    default: ({
      alt = "",
      className,
      src
    }: {
      alt?: string;
      className?: string;
      src: string;
    }) =>
      createElement("img", {
        alt,
        className,
        src: typeof src === "string" ? src : ""
      })
  };
});

vi.mock("next/headers", () => ({
  headers: () =>
    Promise.resolve({
      get: (name: string) =>
        name.toLowerCase() === "x-kkcb-pathname" ? requestState.pathname : null
    })
}));

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
  usePathname: () => requestState.pathname
}));

import RootLayout, { metadata } from "@/app/layout";
import LocaleLayout from "@/app/[locale]/layout";
import LocalizedNotFound from "@/app/[locale]/not-found";
import TopLevelNotFound from "@/app/not-found";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

beforeEach(() => {
  requestState.pathname = "/ro";
});

function renderServerMarkup(element: React.ReactElement) {
  return new Promise<string>((resolve, reject) => {
    const stream = new PassThrough();
    let html = "";

    stream.on("data", (chunk) => {
      html += chunk.toString();
    });
    stream.on("end", () => resolve(html));
    stream.on("error", reject);

    const { pipe } = renderToPipeableStream(element, {
      onAllReady() {
        pipe(stream);
      },
      onError(error) {
        reject(error);
      }
    });
  });
}

describe("root metadata", () => {
  it("wires the favicon set and web manifest from public assets", () => {
    expect(metadata.manifest).toBe("/site.webmanifest");
    expect(metadata.icons).toEqual({
      apple: [
        {
          sizes: "180x180",
          type: "image/png",
          url: "/apple-touch-icon.png"
        }
      ],
      icon: [
        { url: "/favicon.ico" },
        {
          sizes: "16x16",
          type: "image/png",
          url: "/favicon-16x16.png"
        },
        {
          sizes: "32x32",
          type: "image/png",
          url: "/favicon-32x32.png"
        }
      ]
    });
  });
});

describe("root document language", () => {
  it("renders Romanian as the default server document language", async () => {
    const html = renderToStaticMarkup(
      await RootLayout({
        children: React.createElement("main", null, "Romanian page")
      })
    );

    expect(html).toContain('lang="ro-RO"');
  });

  it("sets the browser document language from the current path before hydration", async () => {
    const html = renderToStaticMarkup(
      await RootLayout({
        children: React.createElement("main", null, "Language script")
      })
    );

    expect(html).toContain("document.documentElement.lang");
    expect(html).toContain("location.pathname.startsWith('/en')");
    expect(html).toContain("?'en':'ro-RO'");
  });
});

describe("not found pages", () => {
  it("renders an English localized fallback inside one locale site frame", async () => {
    requestState.pathname = "/en/blog/missing-post";

    const html = await renderServerMarkup(
      await LocaleLayout({
        children: React.createElement(LocalizedNotFound),
        params: Promise.resolve({ locale: "en" })
      })
    );

    expect(html).toContain('class="site-frame"');
    expect(html.match(/class="site-header"/g)).toHaveLength(1);
    expect(html).toContain("Page not found");
    expect(html).toContain('href="/en"');
    expect(html.match(/class="site-footer"/g)).toHaveLength(1);
  });

  it("renders a Romanian top-level fallback inside the site frame", async () => {
    requestState.pathname = "/missing-page";

    const html = await renderServerMarkup(await TopLevelNotFound());

    expect(html).toContain('class="site-frame"');
    expect(html).toContain('class="site-header"');
    expect(html).toContain("Pagina nu a fost găsită");
    expect(html).toContain('href="/ro"');
    expect(html).toContain('class="site-footer"');
  });
});

describe("sitemap", () => {
  it("lists localized primary routes and blog posts on the real public domain", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        "https://kkc-romania.org/ro",
        "https://kkc-romania.org/ro/about",
        "https://kkc-romania.org/ro/blog",
        "https://kkc-romania.org/ro/blog/bedside-volunteering",
        "https://kkc-romania.org/en",
        "https://kkc-romania.org/en/contact",
        "https://kkc-romania.org/en/blog/fundraising-with-purpose"
      ])
    );
    expect(urls.every((url) => url.startsWith("https://kkc-romania.org/"))).toBe(
      true
    );
  });
});

describe("robots", () => {
  it("allows indexing and points crawlers at the public sitemap", () => {
    expect(robots()).toEqual({
      host: "https://kkc-romania.org",
      rules: [{ allow: "/", userAgent: "*" }],
      sitemap: "https://kkc-romania.org/sitemap.xml"
    });
  });
});
