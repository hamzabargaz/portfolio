import fs from "fs";
import path from "path";

const root = process.cwd();
const postsDirectory = path.join(root, "content", "posts");

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
        hero_image: {
          url: metadata.hero_image || "",
          width: 800,
          height: 400,
        },
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
        new Date(b.date).getTime() - new Date(a.date).getTime()
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
      hero_image: {
        url: metadata.hero_image || "",
        width: 800,
        height: 400,
      },
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
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
