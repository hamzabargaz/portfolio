import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Newspaper } from "lucide-react";
import Badge from "../ui/badge";

export default function Post(post: any) {
  const { title, excerpt, tags, hero_image, slug } = post;

  return (
    <Link href={"/posts/" + slug}>
      <div className='flex flex-wrap rounded-xl p-4 bg-light-100 dark:bg-dark-100'>
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
        <div className='pl-6 pt-6 sm:pt-0 w-full sm:w-2/3 flex flex-col gap-4'>
          <div className=''>
            <h2 className='text-2xl font-medium font-sans mb-2'>{title}</h2>
            <div className='flex items-center gap-4 mb-4'>
              {tags.split(",").map((tag: any) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <p className='text-sm'>
              {excerpt} <span className='italic -ml-1'>...Read more</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
