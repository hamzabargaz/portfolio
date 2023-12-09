import Card from "@/components/card";
import { Footer } from "@/components";
import Intro from "./intro";
import Featured from "./featured";
import Recent from "./recent";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

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
          fallback={
            <Skeleton className='h-44 w-full opacity-50 mb-4' count={3} />
          }
        >
          <Recent />
        </Suspense>
      </Card>
      {/* <Card className='h-20 col-span-2'>
        <Footer />
      </Card> */}
    </div>
  );
}
