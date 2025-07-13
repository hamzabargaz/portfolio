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
  const fileContents = fs.readFileSync(contentPath, "utf8");
  const data = JSON.parse(fileContents) as AuthorData;

  return data;
};

export const getTotalPosts = async (): Promise<number> => {
  const postsPath = path.join(process.cwd(), "content", "posts");
  const files = fs.readdirSync(postsPath);
  return files.filter((file) => file.endsWith(".mdx")).length;
};
