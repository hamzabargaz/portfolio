import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPost } from "@/lib/mdx";
import "@/assets/styles/atom-one-dark.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any) {
  const post = await getPost(params);

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
  };
}

function formatDate(date: string) {
  const currentDate = new Date();
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

  return `${fullDate} (${formattedDate})`;
}

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
};

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />;
}

function Callout(props: any) {
  return (
    <div className='px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8'>
      <div className='flex items-center w-4 mr-4'>{props.emoji}</div>
      <div className='w-full callout'>{props.children}</div>
    </div>
  );
}
const components = {
  Image: RoundedImage,
  a: CustomLink,
  // h1: Heading.H1,
  // h2: Heading.H2,
  // p: Text,
  // pre: Pre,
  // code: InlineCode,
};

export default async function Post({ params }: any) {
  const props = await getPost(params);

  if (!props) {
    notFound();
  }

  return (
    <article className='py-20 prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto text-primary dark:text-tertiary'>
      <h1 className='font-bold text-2xl tracking-tighter max-w-[650px] text-center pb-10 text-primary dark:text-white'>
        {props.frontMatter.title}
      </h1>
      <div className='flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]'>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          {formatDate(props.frontMatter.date)}
        </p>
        {/* <ViewCounter allViews={allViews} slug={post.slug} trackView /> */}
      </div>
      <MDXRemote
        source={props.content}
        options={options}
        components={components}
      />
    </article>
  );
}
