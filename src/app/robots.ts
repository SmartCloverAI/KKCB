import type { MetadataRoute } from "next";

import { SITE_BASE_URL } from "@/lib/site-utils";

export default function robots(): MetadataRoute.Robots {
  return {
    host: SITE_BASE_URL,
    rules: [{ allow: "/", userAgent: "*" }],
    sitemap: `${SITE_BASE_URL}/sitemap.xml`
  };
}
