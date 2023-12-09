import Card from "@/components/card";
import React from "react";
import Skeleton from "react-loading-skeleton";

type Props = {};

export default function Loading({}: Props) {
  return (
    <Card className='w-full p-4 flex flex-col gap-4 mb-4'>
      <Skeleton className='h-44 w-full opacity-50 mb-4' count={3} />
    </Card>
  );
}
