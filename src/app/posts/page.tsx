import React from "react";
import Card from "@/components/kit/card";
import { getAllPosts } from "@/lib/hygraph";
import { PostCard } from "@/components";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <>
      <div className='my-4'>
        <div className='w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {posts.map((post: any, i: number) => (
            <PostCard key={i} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}
