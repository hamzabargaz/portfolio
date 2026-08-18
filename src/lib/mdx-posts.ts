import fs from "fs";
import path from "path";
import { imageSize } from "image-size";
import { parseDate, formatDate as formatDateUtil } from "./date-utils";

const root = process.cwd();
const postsDirectory = path.join(root, "content", "posts");
const publicDirectory = path.join(root, "public");

// Default for missing/unreadable images. Matches the 1200x630 OG ratio the
// generated hero images use so cards keep a sane aspect while loading.
const FALLBACK_HERO_SIZE = { width: 1200, height: 630 };

// Reads the intrinsic size of a hero image under /public so the card can
// reserve the correct aspect box instead of cropping into a fixed height.
function getHeroImage(url: string | undefined): Post["hero_image"] {
  if (!url) return { url: "", ...FALLBACK_HERO_SIZE };
  if (!url.startsWith("/")) return { url, ...FALLBACK_HERO_SIZE };

  try {
    const { width, height } = imageSize(
      fs.readFileSync(path.join(publicDirectory, url))
    );
    if (width && height) return { url, width, height };
  } catch {
    // Missing or unreadable file — fall through to fallback dimensions
  }
  return { url, ...FALLBACK_HERO_SIZE };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  hero_image: {
    url: string;
    width?: number;
    height?: number;
  };
  content?: string;
  seo?: {
    openGraph: {
      authors: string[];
      type: string;
      url: string;
      siteName: string;
    };
    twitter: {
      card: string;
      site: string;
      creator: string;
    };
  };
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    return { metadata: {}, content };
  }

  const frontMatterBlock = match[1];
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- frontmatter values are dynamic (strings or JSON-parsed arrays/objects)
  const metadata: any = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes

    // Handle array values (like tags)
    if (value.startsWith("[") && value.endsWith("]")) {
      try {
        value = JSON.parse(value);
      } catch {
        // If JSON parsing fails, treat as string
      }
    }

    metadata[key.trim()] = value;
  });

  return { metadata, content };
}

function getMDXFiles(dir: string) {
  try {
    if (!fs.existsSync(dir)) {
      return [];
    }
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}

function readMDXFile(filePath: string) {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
  } catch (error) {
    console.error("Error reading file:", filePath, error);
    return { metadata: {}, content: "" };
  }
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    // Use the slug from frontmatter if available, otherwise use filename
    const slug = metadata.slug || path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const postsData = getMDXData(postsDirectory);

    const posts = postsData.map(({ metadata, slug, content }) => {
      return {
        id: slug,
        title: metadata.title || "",
        slug: metadata.slug || slug,
        excerpt: metadata.excerpt || "",
        date: metadata.date || "",
        tags: Array.isArray(metadata.tags) ? metadata.tags : [],
        hero_image: getHeroImage(metadata.hero_image),
        content,
        seo: metadata.seo || {
          openGraph: {
            authors: metadata.seo?.openGraph?.authors || [],
            type: "article",
            url: "",
            siteName: "",
          },
          twitter: {
            card: "summary_large_image",
            site: "",
            creator: "",
          },
        },
      };
    });

    // Sort posts by date (newest first)
    return posts.sort(
      (a: Post, b: Post) =>
        parseDate(b.date).getTime() - parseDate(a.date).getTime()
    );
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
};

export const getSinglePost = async (slug: string): Promise<Post | null> => {
  try {
    // Get all posts and find the one with matching slug
    const postsData = getMDXData(postsDirectory);
    const postData = postsData.find((post) => post.slug === slug);

    if (!postData) {
      return null;
    }

    const { metadata, content } = postData;

    return {
      id: slug,
      title: metadata.title || "",
      slug: metadata.slug || slug,
      excerpt: metadata.excerpt || "",
      date: metadata.date || "",
      tags: Array.isArray(metadata.tags) ? metadata.tags : [],
      hero_image: getHeroImage(metadata.hero_image),
      content,
      seo: metadata.seo || {
        openGraph: {
          authors: metadata.seo?.openGraph?.authors || [],
          type: "article",
          url: "",
          siteName: "",
        },
        twitter: {
          card: "summary_large_image",
          site: "",
          creator: "",
        },
      },
    };
  } catch (error) {
    console.error("Error reading post:", error);
    return null;
  }
};

export const getTotalPosts = async (): Promise<number> => {
  try {
    const mdxFiles = getMDXFiles(postsDirectory);
    return mdxFiles.length;
  } catch (error) {
    console.error("Error counting posts:", error);
    return 0;
  }
};

export function formatDate(date: string, includeRelative = false) {
  return formatDateUtil(date, includeRelative);
}
