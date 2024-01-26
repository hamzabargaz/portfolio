import React from "react";
import { PostCard } from "@/components";

type Props = {
  posts: any;
};

export default async function Recent({ posts }: Props) {
  return (
    <div className='flex flex-col h-full'>
      <h3 className='mb-6'>Recent Posts</h3>
      <div className='flex flex-col gap-4 pr-4'>
        {posts.map((post: any) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
