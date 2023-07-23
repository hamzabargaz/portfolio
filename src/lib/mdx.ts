import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPost = ({ slug }: { slug: string }) => {
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

  // 3) For each blog found
  const posts = files.map((filename) => {
    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(
      path.join("src", "content", filename),
      "utf-8"
    );

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return posts;
};
