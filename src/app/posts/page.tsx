import React from "react";
import ListPosts from "./list-posts";

export default function Posts() {
  return (
    <>
      <h1 className='text-4xl md:text-8xl text-center my-24 font-serif tracking-widest'>
        Posts
      </h1>
      <ListPosts />
    </>
  );
}
