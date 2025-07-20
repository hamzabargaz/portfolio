import Intro from "./intro";
import Recent from "./recent";
import { isEmpty } from "ramda";
import { getAllPosts } from "@/lib/mdx-posts";
import { getAuthorAction } from "@/lib/actions";
import { PersonSchema } from "@/components";

export default async function Home() {
  const author = await getAuthorAction();
  const posts = await getAllPosts();

  return (
    <div className='mt-3 flex flex-col h-full pb-20 md:pb-0'>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mb-4'>
        <Intro author={author} />
      </div>
      {!isEmpty(posts) && <Recent posts={posts} />}
      <PersonSchema author={author} />
    </div>
  );
}
