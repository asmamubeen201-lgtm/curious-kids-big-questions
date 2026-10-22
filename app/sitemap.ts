import type { MetadataRoute } from "next";
import { ARTICLES, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/books/why-does-the-moon-follow-me", "/questions", "/series", "/about"];
  return [
    ...staticPages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...ARTICLES.map((article) => ({
      url: `${SITE_URL}/questions/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
