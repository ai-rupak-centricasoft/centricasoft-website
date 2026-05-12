import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const SITE_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/what-we-do/agentic-ai", priority: 0.9, changeFrequency: "monthly" },
  { path: "/what-we-do/genai-chatbots", priority: 0.9, changeFrequency: "monthly" },
  { path: "/what-we-do/data-engineering", priority: 0.9, changeFrequency: "monthly" },
  { path: "/what-we-do/data-analytics", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/nubo", priority: 0.9, changeFrequency: "weekly" },
  { path: "/company/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/company/clients", priority: 0.8, changeFrequency: "monthly" },
  { path: "/company/partners", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
  { path: "/terms-of-use", priority: 0.4, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITE_ROUTES.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
