import React from "react";
import Link from "next/link";
// import { ArrowRight } from "@/assets/icons";
import { getAllPostsMeta } from "@/lib/mdx";
import Image from "next/image";
import Card from "@/components/card";
import { Newspaper } from "lucide-react";
import { Badge } from "@/components";

type Props = {};

export default async function Posts({}: Props) {
  const posts = await getAllPostsMeta();
  return (
    <div className='mt-3'>
      <Card className='w-full p-4 flex flex-col gap-4 mb-4'>
        {posts.map((post: any) => (
          <Post key={post.slug} {...post} />
        ))}
      </Card>
    </div>
  );
}

function Post(post: any) {
  return (
    <Link href={"/posts/" + post.slug}>
      <div className='flex flex-wrap rounded-xl p-4 bg-light-100 dark:bg-dark-100'>
        <div className='w-full sm:w-1/3 bg-light-200 dark:bg-dark-200 h-44 rounded-xl flex items-center justify-center'>
          {!post.meta.hero ? (
            <Image
              alt={post.slug}
              src={post.meta.hero}
              width={176}
              height={176}
              className='h-full w-full object-cover rounded-xl'
            />
          ) : (
            <Newspaper className='w-10 h-10' />
          )}
        </div>
        <div className='pl-6 pt-6 sm:pt-0 w-full sm:w-2/3 flex flex-col gap-4'>
          <div className=''>
            <h2 className='text-xl font-bold mb-2'>Post 1</h2>
            <div className='flex items-center gap-4 mb-4'>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Typescript</Badge>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              voluptatum ipsum laborum voluptates vero amet
            </p>
          </div>
        </div>
      </div>
      {/* <div className='h-44 w-64 bg-white shadow-lg rounded-xl '>
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
        </div> */}
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
      {/* </Card> */}
    </Link>
  );
}
