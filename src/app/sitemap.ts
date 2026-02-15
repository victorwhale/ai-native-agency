import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-native-agency.com";

  return [
    {
      url: baseUrl,
      lastModified: "2026-02-15",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: "2026-02-15",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/ai-native-agency-complete-guide`,
      lastModified: "2026-02-13",
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/what-is-ai-native-agency`,
      lastModified: "2026-02-15",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/yc-ai-native-agency`,
      lastModified: "2026-02-15",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/ai-native-agency-verticals`,
      lastModified: "2026-02-15",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/ai-native-vs-traditional`,
      lastModified: "2026-02-15",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/how-to-start-ai-native-agency`,
      lastModified: "2026-02-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ai-native-agency-tech-stack`,
      lastModified: "2026-02-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ai-native-agency-pricing`,
      lastModified: "2026-02-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alternatives/ai-native-vs-ai-enabled`,
      lastModified: "2026-02-12",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alternatives/traditional-vs-ai-native`,
      lastModified: "2026-02-12",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alternatives/traditional-agencies`,
      lastModified: "2026-02-12",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-02-11",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
