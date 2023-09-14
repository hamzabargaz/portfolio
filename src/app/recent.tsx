import { Newspaper } from "lucide-react";
import React from "react";

type Props = {};

export default function Recent({}: Props) {
  return (
    <>
      <h3 className='mb-6'>Recent Posts</h3>
      <div className='flex flex-col gap-4 max-h-60 overflow-auto pr-4 relative'>
        {Array.from({ length: 4 }).map((_, i) => (
          <Post key={i} />
        ))}
      </div>
    </>
  );
}

const Post = () => {
  return (
    <div className='rounded-xl p-4 bg-light-100 dark:bg-dark-100 flex'>
      <div className='w-1/3 bg-light-200 dark:bg-dark-200 h-32 rounded-xl p-4 flex items-center justify-center'>
        <Newspaper />
      </div>
      <div className='pl-6 w-2/3 flex flex-col gap-4'>
        <div className=''>
          <h4 className='text-lg font-medium mb-2'>Post 1</h4>
          <div className='flex items-center mb-4'>
            <div className='p-2 bg-light-200 dark:bg-dark-200 rounded-xl'>
              Tag 1
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatum ipsum laborum voluptates vero amet
          </p>
        </div>
      </div>
    </div>
  );
};
