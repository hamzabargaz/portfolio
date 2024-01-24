import Card from "@/components/kit/card";
import Intro from "./intro";
import Featured from "./featured";
import Recent from "./recent";
import { Suspense } from "react";
import { times } from "ramda";
import { PostsSkeleton } from "@/components/kit/loaders";

export default async function Home() {
  return (
    <div className='mt-3 flex flex-col h-full pb-20 md:pb-0'>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mb-4'>
        <Card className='p-6'>
          <Intro />
        </Card>
        <Card className='p-6'>
          <Featured />
        </Card>
      </div>
      <Card className='grow p-4'>
        <Suspense
          fallback={times(
            (i) => (
              <PostsSkeleton key={i} />
            ),
            3
          )}
        >
          <Recent />
        </Suspense>
      </Card>
    </div>
  );
}
