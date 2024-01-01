import Card from "@/components/kit/card";
import { times } from "ramda";
import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <Card className='p-6 mt-4'>
      <div className='flex flex-col items-center space-y-4 animate-pulse '>
        {times(
          (i) => (
            <div
              key={i}
              className='h-4 rounded-xl w-full dark:bg-dark-100 bg-light-100'
            />
          ),
          7
        )}
      </div>
    </Card>
  );
}
