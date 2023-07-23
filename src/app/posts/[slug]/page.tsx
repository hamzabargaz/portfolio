import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPost } from "@/lib/mdx";
import "@/assets/styles/atom-one-dark.css";

export async function generateMetadata({ params }: any) {
  const post = getPost(params);

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
  };
}

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
};

// const components = {
//   img: Image,
//   // h1: Heading.H1,
//   // h2: Heading.H2,
//   // p: Text,
//   // pre: Pre,
//   // code: InlineCode,
// }

export default function Post({ params }: any) {
  const props = getPost(params);
  return (
    <article className='py-20 prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
      <h1 className='text-center pb-10'>{props.frontMatter.title}</h1>
      <MDXRemote source={props.content} options={options} />
    </article>
  );
}
