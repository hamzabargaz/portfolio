import React from "react";
import { PostCard } from "@/components";
import cx from "classnames";
import { FadeIn } from "@/components/kit/animate";

type Props = {
  posts: any;
};

export default async function Recent({ posts }: Props) {
  return (
    <div className='flex flex-col h-full'>
      <FadeIn>
        <h2
          className={cx(
            "text-2xl mb-6 font-bold bg-clip-text text-transparent",
            "bg-gradient-to-r from-dark-100 dark:from-light-100 to-dark-300 dark:to-light-300"
          )}
        >
          Recent Posts
        </h2>
      </FadeIn>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {posts.map((post: any, i: number) => (
          <FadeIn transition={{ duration: `0.${i + 5}` }} key={post.id}>
            <PostCard {...post} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
