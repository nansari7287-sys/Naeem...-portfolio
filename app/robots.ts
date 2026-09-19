// ============================================================================
// 📁 app/robots.ts
// SEARCH ENGINE BOT CRAWLING CONFIGURATION
// ============================================================================
// AUTHOR: DrakoXNaeem (Md Naeem Ansari)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://frexxy-portfolio-3dri.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
