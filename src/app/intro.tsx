import React from "react";
import Image from "next/image";
import Avatar from "@assets/images/me.jpg";
import Link from "next/link";
import { Button } from "@/components";
import { DM_Serif_Display } from "next/font/google";
import cx from "classnames";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

type Props = {};

export default function Intro({}: Props) {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <div className='w-32 h-32 rounded-full border-8 border-[#EEEEEE] dark:border-[#282828]'>
        <Image
          src={Avatar}
          alt='my picture'
          className='rounded-full w-full h-full object-cover bg-blend-overlay shrink-0'
        />
      </div>
      <h1 className={cx(dmSerifDisplay.className, "text-3xl font-medium my-2")}>
        Hamza Bargaz
      </h1>
      <p className='font-light'>
        Committed to elevating user experiences through code, I'm a frontend
        developer with a talent for harmonizing aesthetics and functionality.
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
