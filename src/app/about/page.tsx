import React, { Fragment } from "react";
import Title from "@/components/ui/title";
import Card from "@/components/kit/card";
import { getBlocks, getInfo } from "@/lib/notion";
import { renderBlock } from "@/components/kit/notion-render";

type Props = {};

export default async function About({}: Props) {
  const data: any = await getInfo();
  const about = data.find(
    (item: any) => item.properties?.slug.rich_text[0].plain_text === "about_me"
  );
  const page = await getBlocks(about.id);

  return (
    <main className='mt-4'>
      <Card className='p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <Title>. About me</Title>
            {page.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
          </div>
          {/* <div className="flex justify-center w-full">
              <div className="w-64 h-80 bg-white" />
              <Image
                src={Avatar}
                alt="my picture"
                width={256}
                height={320}
                className="bg-blend-overlay rounded-full"
              />
            </div> */}
        </div>
      </Card>
    </main>
  );
}
