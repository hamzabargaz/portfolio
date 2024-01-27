import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components";
import { DM_Serif_Display } from "next/font/google";
import cx from "classnames";
import { getAuthor } from "@/lib/hygraph";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  author: any;
};

export default async function Intro({ author }: Props) {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <div className='w-32 h-32 relative rounded-full border-8 border-[#EEEEEE] dark:border-[#282828]'>
        <Image
          src={author.avatar.url}
          alt='my picture'
          width={128}
          height={128}
          className='rounded-full w-full h-full object-cover bg-blend-overlay shrink-0'
        />
      </div>
      <h1 className={cx(dmSerifDisplay.className, "text-3xl font-medium my-2")}>
        {author.full_name}
      </h1>
      <p className='font-light'>
        {author.intro}
        <Link href='/about' className='mx-1 underline italic'>
          read more
        </Link>
      </p>
      <div className='flex items-center gap-4 mt-4'>
        <CTA />
      </div>
    </div>
  );
}
