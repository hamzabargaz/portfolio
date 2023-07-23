import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPost } from "@/lib/mdx";
import "@/assets/styles/atom-one-dark.css";

export async function generateMetadata({ params }: any) {
  const post = await getPost(params);

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

export default async function Post({ params }: any) {
  const props = await getPost(params);
  return (
    <article className='py-20 prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto text-primary dark:text-tertiary'>
      <h1 className='text-center pb-10 text-primary dark:text-white'>
        {props.frontMatter.title}
      </h1>
      <MDXRemote source={props.content} options={options} />
    </article>
  );
}
