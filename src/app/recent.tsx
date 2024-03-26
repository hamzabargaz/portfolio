import React from "react";
import { PostCard } from "@/components";

type Props = {
  posts: any;
};

export default async function Recent({ posts }: Props) {
  return (
    <div className='flex flex-col h-full'>
      <h2
        className='text-2xl mb-6 font-bold bg-clip-text text-transparent'
        style={{
          backgroundImage:
            "linear-gradient(0deg, #00000000 -30.000000000000004%, #ffffff 195.00000000000003%)",
        }}
      >
        Recent Posts
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {posts.map((post: any) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
