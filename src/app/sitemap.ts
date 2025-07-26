import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx-posts";
import {
  formatDateForSitemap,
  getCurrentDateForSitemap,
} from "@/lib/date-utils";

export const baseUrl = "https://www.bargaz.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blog posts
  const posts = await getAllPosts();

  // Create blog post entries
  const blogs = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: formatDateForSitemap(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Create static route entries
  const routes = [
    {
      url: baseUrl,
      lastModified: getCurrentDateForSitemap(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: getCurrentDateForSitemap(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: getCurrentDateForSitemap(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
  ];

  return [...routes, ...blogs];
}
