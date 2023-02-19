import { Link } from "@/components";
import { ArrowRight } from "@/icons";
import React from "react";

type Props = {};

export default function ArticlesList({}: Props) {
  return (
    <div className="">
      {blogs.map((node) => (
        <Link
          className="flex group py-6 mb-4 border-t-2 first:border-t-0"
          key={node.slug}
          href={`/blog/${node.slug}`}
        >
          <div className="flex-col">
            <div className="group-hover:text-secondary text-2xl mb-2">
              {node.title}
            </div>
            <p className="text-lg font-light text-primary-50 dark:text-gray-400">
              {node.excerpt}
            </p>
          </div>
          <div className="flex items-center ml-auto relative">
            <ArrowRight className="w-12 block group-hover:hidden absolute right-0 top-0" />
            <div className="transition duration-500 transform opacity-0 group-hover:opacity-100 group-hover:scale-105">
              <div className="bg-white shadow-lg h-44 w-44 absolute right-0 -top-24" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

const blogs = [
  {
    slug: "nextJS-typescript-tailwindcss",
    title: "Next.js + TypeScript + Tailwind CSS",
    excerpt:
      "this article is about how to setup a next.js project with typescript and tailwindcss",
  },
  {
    slug: "nextJS-typescript-tailwindcss2",
    title: "Next.js + TypeScript + Tailwind CSS",
    excerpt:
      "this article is about how to setup a next.js project with typescript and tailwindcss",
  },
];
