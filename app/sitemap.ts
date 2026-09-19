// ============================================================================
// 📁 app/sitemap.ts
// DYNAMIC SITEMAP GENERATOR ARCHITECTURE
// ============================================================================
// AUTHOR: DrakoXNaeem (Md Naeem Ansari)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://frexxy-portfolio-3dri.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
