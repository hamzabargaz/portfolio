import React from "react";
import Image from "next/image";
// import Avatar from "@assets/images/me.jpg";
import Link from "next/link";
import { Button } from "@/components";
import { DM_Serif_Display } from "next/font/google";
import cx from "classnames";
import { getInfo } from "@/lib/notion";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

type Props = {};

export default async function Intro({}: Props) {
  const data: any = await getInfo();
  // console.log("info data =======> ", data);

  const info = data.find(
    (item: any) => item.properties?.slug.rich_text[0].plain_text === "intro"
  );
  const name = info.properties?.Name?.title[0]?.plain_text;
  const description = info.properties?.description?.rich_text[0]?.plain_text;
  const avatar = info.properties?.Image.files[0]?.file?.url;

  console.log("avatar =====> ", avatar);

  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <div className='w-32 h-32 relative rounded-full border-8 border-[#EEEEEE] dark:border-[#282828]'>
        <Image
          src={avatar}
          alt='my picture'
          fill
          className='rounded-full w-full h-full object-cover bg-blend-overlay shrink-0'
        />
      </div>
      <h1 className={cx(dmSerifDisplay.className, "text-3xl font-medium my-2")}>
        {name}
      </h1>
      <p className='font-light'>
        {description}
        <Link href='/about' className='mx-1 underline italic'>
          read more about me
        </Link>
      </p>
      <div className='flex items-center gap-4 mt-4'>
        <Button>Hire me</Button>
        <Button appearance='secondary'>Contact</Button>
      </div>
    </div>
  );
}
