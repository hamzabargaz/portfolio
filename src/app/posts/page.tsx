import React, { Suspense } from "react";
import ListPosts from "./list-posts";
import { getDatabase } from "@/lib/notion";

async function getPosts() {
  const database = await getDatabase();
  return database;
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <>
      {/* <h1 className='text-4xl md:text-8xl text-center my-24 font-serif tracking-widest'>
        Posts
      </h1> */}
      <ListPosts posts={posts} />
    </>
  );
}
