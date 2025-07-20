import fs from "fs";
import path from "path";

export interface AuthorData {
  website_url: string;
  full_name: string;
  intro: string;
  avatar: string;
  social_links: Array<{
    name: string;
    url: string;
  }>;
  seo: {
    title: string;
    description: string;
    url: string;
    icon_light: {
      url: string;
    };
    icon_dark: {
      url: string;
    };
    type: string;
    site_name: string;
    locale: string;
    openGraph: {
      type: string;
      title: string;
      description: string;
      image: string;
      url: string;
      site_name: string;
      locale: string;
      section: string;
      author: string;
      images: Array<{
        url: string;
        width: number;
        height: number;
      }>;
    };
    twitter: {
      card: string;
      creator: string;
      title: string;
      description: string;
      image: {
        url: string;
      };
      site: string;
      locale: string;
    };
  };
}

export const getAuthor = async (): Promise<AuthorData> => {
  const contentPath = path.join(process.cwd(), "content", "author.json");

  if (!fs.existsSync(contentPath)) {
    throw new Error(`Author data file not found at: ${contentPath}`);
  }

  try {
    const fileContents = fs.readFileSync(contentPath, "utf8");
    const data = JSON.parse(fileContents) as AuthorData;

    if (!data || !data.full_name) {
      throw new Error("Invalid author data format");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to load author data: ${error.message}`);
    }
    throw new Error("Failed to load author data");
  }
};

export const getTotalPosts = async (): Promise<number> => {
  const postsPath = path.join(process.cwd(), "content", "posts");

  if (!fs.existsSync(postsPath)) {
    throw new Error(`Posts directory not found at: ${postsPath}`);
  }

  try {
    const files = fs.readdirSync(postsPath);
    return files.filter((file) => file.endsWith(".mdx")).length;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to count posts: ${error.message}`);
    }
    throw new Error("Failed to count posts");
  }
};
