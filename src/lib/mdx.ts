import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPost = async ({ slug }: { slug: string }) => {
  const markdownFile = fs.readFileSync(
    path.join("src", "content", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(path.join("src", "content"));

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join("src", "content", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return posts;
};
