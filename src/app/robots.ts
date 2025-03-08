import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/imprint"],
    },
    sitemap: "https://kraenz.eu/sitemap.xml",
  };
}
