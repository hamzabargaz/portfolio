import { Badge } from "@/components";
import { Newspaper } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/hygraph";

type Props = {};

export default async function Recent({}: Props) {
  const posts = await getAllPosts();
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
  const { title, excerpt, tags, slug, hero_image } = post;
  return (
    <Link href={"/posts/" + slug}>
      <div className='rounded-xl p-4 bg-light-100 dark:bg-dark-100 flex flex-wrap'>
        <div className='w-full sm:w-1/3 bg-light-200 dark:bg-dark-200 h-44 rounded-xl flex items-center justify-center'>
          {hero_image ? (
            <Image
              alt={post.slug}
              src={hero_image.url}
              width={hero_image.width}
              height={hero_image.height}
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
              {tags.split(",").map((tag: any) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <p>
              {excerpt} <span className='italic'>...Read more</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
