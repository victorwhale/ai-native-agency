import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/contact/thank-you"],
      },
    ],
    sitemap: "https://ai-native-agency.com/sitemap.xml",
    host: "https://ai-native-agency.com",
  };
}

// Note: llms.txt and llms-full.txt are served from /public as static files
// at /llms.txt and /llms-full.txt respectively
