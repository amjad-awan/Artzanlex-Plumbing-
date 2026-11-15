import { MetadataRoute } from "next";
import { SITE } from "@/lib";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE, lastModified: new Date() }];
}
