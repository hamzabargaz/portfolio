import React, { Suspense } from "react";
import ListPosts from "./list-posts";
import { getAllPosts } from "@/lib/notion";
import Card from "@/components/kit/card";
import Skeleton from "react-loading-skeleton";

async function getPosts() {
  const database = await getAllPosts();
  return database;
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <>
      <ListPosts posts={posts} />
    </>
  );
}
