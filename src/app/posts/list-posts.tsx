import React from "react";
// import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { ArrowRight } from "@/assets/icons";
import { getAllPostsMeta } from "@/lib/mdx";
import Image from "next/image";

type Props = {};

export default async function Posts({}: Props) {
  const posts = await getAllPostsMeta();
  return (
    <div className=''>
      {posts.map((post: any) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  );
}

function PostCard(post: any) {
  return (
    <Link
      className='flex group py-6 mb-4 border-t-2 first:border-t-0'
      href={"/posts/" + post.slug}
    >
      <div className='flex-col'>
        <div className='group-hover:text-secondary text-2xl mb-2'>
          {post.meta.title}
        </div>
        <p className='text-lg font-light text-primary-50 dark:text-gray-400'>
          {post.meta.description}
        </p>
      </div>
      <div className='hidden md:flex items-center ml-auto relative'>
        <ArrowRight className='w-12 block group-hover:hidden absolute right-0 top-0' />
        <div className='transition duration-500 transform opacity-0 group-hover:opacity-100 group-hover:scale-105'>
          <div className='bg-white shadow-lg rounded-xl h-44 w-44 absolute right-0 -top-24'>
            <Image
              alt={post.slug}
              src={post.meta.hero}
              fill
              className='shadow-lg h-full w-full absolute right-0 -top-24 object-contain'
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
