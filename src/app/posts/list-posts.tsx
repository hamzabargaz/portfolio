import React from "react";
import Link from "next/link";
// import { ArrowRight } from "@/assets/icons";
import { getAllPostsMeta } from "@/lib/mdx";
import Image from "next/image";
import Card from "@/components/card";

type Props = {};

export default async function Posts({}: Props) {
  const posts = await getAllPostsMeta();
  return (
    <div className='mt-6'>
      {posts.map((post: any) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  );
}

function PostCard(post: any) {
  return (
    <Link href={"/posts/" + post.slug}>
      <Card className='w-full p-6 flex gap-4 py-6 mb-4 border-t-2 first:border-t-0'>
        <div className='h-44 w-64 bg-white shadow-lg rounded-xl '>
          <Image
            alt={post.slug}
            src={post.meta.hero}
            width={176}
            height={176}
            className='h-full w-full object-cover rounded-xl'
          />
        </div>
        <div className='flex-col'>
          <div className='group-hover:text-secondary text-2xl mb-2'>
            {post.meta.title}
          </div>
          <p className='text-lg font-light text-primary-50 dark:text-gray-400'>
            {post.meta.description}
          </p>
        </div>
        {/* <div className='hidden md:flex items-center ml-auto relative'>
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
        </div>*/}
      </Card>
    </Link>
  );
}
