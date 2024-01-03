import { Badge } from "@/components";
import { Newspaper } from "lucide-react";
import React from "react";
import { getAllPosts } from "@/lib/notion";
import Link from "next/link";
import Image from "next/image";

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
  const title = post.properties?.name?.title[0]?.plain_text;
  const description = post.properties?.description?.rich_text[0]?.text.content;
  const tags = post.properties?.tags?.multi_select;
  const image = post.properties?.image?.files[0]?.file?.url;
  return (
    <Link href={"/posts/" + slug}>
      <div className='rounded-xl p-4 bg-light-100 dark:bg-dark-100 flex flex-wrap'>
        <div className='w-full sm:w-1/3 bg-light-200 dark:bg-dark-200 h-44 rounded-xl flex items-center justify-center'>
          {image ? (
            <Image
              alt={post.slug}
              src={image}
              width={176}
              height={176}
              className='h-full w-full object-cover rounded-xl'
            />
          ) : (
            <Newspaper className='w-10 h-10' />
          )}
        </div>

        <div className='pl-6 pt-6 md:pt-0 w-full md:w-2/3 flex flex-col gap-4'>
          <div className=''>
            <h4 className='text-lg font-medium mb-2'>{title}</h4>
            <div className='flex items-center gap-4 mb-4'>
              {tags.map((tag: any) => (
                <Badge key={tag.id}>{tag?.name}</Badge>
              ))}
            </div>
            <p>
              {description} <span className='italic'>...Read more</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
