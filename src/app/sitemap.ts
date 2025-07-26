import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx-posts";
import { format, parse } from "date-fns";

export const baseUrl = "https://www.bargaz.me";

// Helper function to parse DD-MM-YYYY format using date-fns
function parseDate(dateString: string): Date {
  if (!dateString) return new Date();

  try {
    // Parse DD-MM-YYYY format
    return parse(dateString, "dd-MM-yyyy", new Date());
  } catch {
    // Fallback to current date if parsing fails
    return new Date();
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blog posts
  const posts = await getAllPosts();

  // Create blog post entries
  const blogs = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: format(parseDate(post.date), "yyyy-MM-dd"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Create static route entries
  const routes = [
    {
      url: baseUrl,
      lastModified: format(new Date(), "yyyy-MM-dd"),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: format(new Date(), "yyyy-MM-dd"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: format(new Date(), "yyyy-MM-dd"),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
  ];

  return [...routes, ...blogs];
}
