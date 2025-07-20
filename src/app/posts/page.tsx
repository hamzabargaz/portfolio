import React from "react";
import { getAllPosts } from "@/lib/mdx-posts";
import { PostCard } from "@/components";
import { FadeIn } from "@/components/kit/animate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts - Hamza Bargaz",
  description:
    "Read articles about web development, React, Next.js, and frontend technologies written by Hamza Bargaz.",
  openGraph: {
    title: "Blog Posts - Hamza Bargaz",
    description:
      "Read articles about web development, React, Next.js, and frontend technologies written by Hamza Bargaz.",
    url: "https://bargaz.me/posts",
    type: "website",
    images: [
      {
        url: "/images/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Hamza Bargaz Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts - Hamza Bargaz",
    description:
      "Read articles about web development, React, Next.js, and frontend technologies.",
    images: ["/images/avatar.jpg"],
  },
};

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <>
      <div className='my-4'>
        <div className='w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {posts.map((post: any, i: number) => (
            <FadeIn key={post.id}>
              <PostCard key={i} {...post} />
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}
