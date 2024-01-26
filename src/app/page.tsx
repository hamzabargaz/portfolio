import Card from "@/components/kit/card";
import Intro from "./intro";
import Featured from "./featured";
import Recent from "./recent";
import { isEmpty } from "ramda";
import { getAllFeatures, getAllPosts, getAuthor } from "@/lib/hygraph";

export default async function Home() {
  const author = await getAuthor();
  const features = await getAllFeatures();
  const posts = await getAllPosts();

  return (
    <div className='mt-3 flex flex-col h-full pb-20 md:pb-0'>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mb-4'>
        <Card className='p-6'>
          {/* @ts-expect-error Server Component */}
          <Intro author={author} />
        </Card>
        <Card className='p-6'>
          {/* @ts-expect-error Server Component */}
          <Featured features={features} />
        </Card>
      </div>
      {!isEmpty(posts) && (
        <Card className='grow p-4'>
          {/* @ts-expect-error Server Component */}
          <Recent posts={posts} />
        </Card>
      )}
    </div>
  );
}
