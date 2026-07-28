import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/solutions",
  "/how-it-works",
  "/industries",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/advertising-disclosure",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
