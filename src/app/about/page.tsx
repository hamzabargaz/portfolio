import React from "react";
import Title from "@/components/ui/title";
import Card from "@/components/kit/card";
import { getAuthor } from "@/lib/hygraph";
import { RichText } from "@graphcms/rich-text-react-renderer";

type Props = {};

export default async function About({}: Props) {
  const data: any = await getAuthor();
  return (
    <main className='mt-4'>
      <Card className='p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <Title>. About me</Title>
            <RichText
              content={data.about.raw}
              renderers={{
                p: ({ children }) => {
                  return (
                    <p className='pr-0 md:pr-24 text-lg tracking-normal leading-8 my-2'>
                      {children}
                    </p>
                  );
                },
              }}
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
