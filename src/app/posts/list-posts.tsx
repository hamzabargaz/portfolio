import React from "react";
import Card from "@/components/kit/card";
import { PostCard } from "@/components";

type Props = {
  posts: any;
};

export default async function Posts({ posts }: Props) {
  return (
    <div className='my-4'>
      <Card className='w-full p-4 flex flex-col gap-4 mb-4'>
        {posts.map((post: any, i: number) => (
          <PostCard key={i} {...post} />
        ))}
      </Card>
    </div>
  );
}
