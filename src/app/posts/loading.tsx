import Card from "@/components/kit/card";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { times } from "ramda";
import { PostsSkeleton } from "@/components/kit/loaders";

type Props = {};

export default function Loading({}: Props) {
  return (
    <Card className='w-full p-4 flex flex-col gap-4 my-4'>
      {times(
        (i) => (
          <PostsSkeleton key={i} />
        ),
        3
      )}
    </Card>
  );
}
