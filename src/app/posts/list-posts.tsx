import React from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/kit/card";
import { Newspaper } from "lucide-react";
import { Badge } from "@/components";

type Props = {
  posts: any;
};

export default async function Posts({ posts }: Props) {
  return (
    <div className='my-4'>
      <Card className='w-full p-4 flex flex-col gap-4 mb-4'>
        {posts.map((post: any) => (
          <Post key={post.slug} {...post} />
        ))}
      </Card>
    </div>
  );
}

function Post(post: any) {
  const slug = post.properties?.slug?.rich_text[0]?.text.content;
  const title = post.properties?.name?.title[0]?.plain_text;
  const description = post.properties?.description?.rich_text[0]?.text.content;
  const tags = post.properties?.tags?.multi_select;
  const image = post.properties?.image?.files[0]?.file?.url;

  return (
    <Link href={"/posts/" + slug}>
      <div className='flex flex-wrap rounded-xl p-4 bg-light-100 dark:bg-dark-100'>
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
        <div className='pl-6 pt-6 sm:pt-0 w-full sm:w-2/3 flex flex-col gap-4'>
          <div className=''>
            <h2 className='text-xl font-bold mb-2'>{title}</h2>
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
}
