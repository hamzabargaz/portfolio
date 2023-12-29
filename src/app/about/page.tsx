import React, { Fragment } from "react";
import Link from "next/link";
// import Image from "next/image";
// import Avatar from "@assets/images/me.jpg";
import { Section } from "@/components";
import Title from "@/components/ui/title";
import { ArrowUpRight, GithubIcon, LinkedinIcon } from "@/assets/icons";
import Card from "@/components/kit/card";
import { getBlocks, getDatabase, getInfo } from "@/lib/notion";
import { renderBlock } from "@/components/kit/notion-render";

type Props = {};

export default async function About({}: Props) {
  const data: any = await getInfo();
  const about = data.find(
    (item: any) => item.properties?.slug.rich_text[0].plain_text === "about_me"
  );
  const page = await getBlocks(about.id);

  return (
    <main className='mt-3'>
      <Card className='p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <Title>. About me</Title>
            {page.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
            {/* <div className='flex items-center gap-4'>
              <SocialLink
                href='https://github.com/hamzabargaz/'
                icon={GithubIcon}
                name='Github'
              />
              <SocialLink
                href='https://www.linkedin.com/in/hamzabargaz/'
                icon={LinkedinIcon}
                name='Linkedin'
              />
            </div> */}
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

// type SocialLinkProps = {
//   href: string;
//   icon: React.FC<React.SVGProps<SVGSVGElement>>;
//   name: string;
// };

// const SocialLink = ({ href, icon: Icon, name }: SocialLinkProps) => {
//   return (
//     <Link
//       className='flex items-center border rounded-lg p-2 cursor-pointer hover:bg-white/20'
//       href={href}
//     >
//       <div className='flex items-center'>
//         <Icon className='w-5 h-5' />
//         <span className='ml-3'>{name}</span>
//       </div>
//       <ArrowUpRight className='ml-6 w-5 h-5' />
//     </Link>
//   );
// };
