import { Badge } from "@/components";
import { Newspaper } from "lucide-react";
import React from "react";
import { getAllPosts } from "@/lib/notion";
import Link from "next/link";

type Props = {};

export const databaseId =
  process.env?.NOTION_DATABASE_ID ?? "NOTION_DATABASE_ID";

async function getPosts() {
  const database = await getAllPosts();
  return database;
}

export default async function Recent({}: Props) {
  const posts = await getPosts();

  return (
    <div className='flex flex-col h-full'>
      <h3 className='mb-6'>Recent Posts</h3>
      <div className='flex flex-col gap-4 pr-4'>
        {posts.map((post: any) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

const Post = (post: any) => {
  const slug = post.properties?.slug?.rich_text[0]?.text.content;
  const title = post.properties?.Name?.title[0]?.plain_text;
  return (
    <Link href={"/posts/" + slug}>
      <div className='rounded-xl p-4 bg-light-100 dark:bg-dark-100 flex flex-wrap'>
        <div className='w-full md:w-1/3 bg-light-200 dark:bg-dark-200 h-32 rounded-xl p-4 flex items-center justify-center'>
          <Newspaper />
        </div>
        <div className='pl-6 pt-6 md:pt-0 w-full md:w-2/3 flex flex-col gap-4'>
          <div className=''>
            <h4 className='text-lg font-medium mb-2'>{title}</h4>
            <div className='flex flex-wrap items-center gap-2 mb-4'>
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
    </Link>
  );
};
