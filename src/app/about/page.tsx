import React from "react";
import Title from "@/components/ui/title";
import Card from "@/components/kit/card";
import { getAuthor } from "@/lib/hygraph";
import { ContentRender } from "@/components";

type Props = {};

export default async function About({}: Props) {
  const data: any = await getAuthor();
  return (
    <main className='mt-4'>
      <Card className='p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <Title>About me</Title>
            <ContentRender content={data.about.raw} />
          </div>
        </div>
      </Card>
    </main>
  );
}
