import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components";
import { DM_Serif_Display } from "next/font/google";
import cx from "classnames";
import Card from "@/components/kit/card";
import { ArrowRight } from "@/assets/icons";
import { FadeIn } from "@/components/kit/animate";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  author: any;
};

export default async function Intro({ author }: Props) {
  return (
    <>
      <FadeIn>
        <Card className='p-6'>
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
            <h1
              className={cx(
                dmSerifDisplay.className,
                "text-3xl font-medium my-2"
              )}
            >
              {author.full_name}
            </h1>
            <p className='font-light'>Front-end Developer - Casablanca</p>
            <div className='flex items-center gap-4 mt-4'>
              <CTA />
            </div>
          </div>
        </Card>
      </FadeIn>
      <FadeIn>
        <Card className='p-6 h-full'>
          <Link href='/about'>
            <div className='gap-4 flex flex-col h-full pr-4 justify-center group relative'>
              <h1
                className={cx(
                  "text-4xl font-bold bg-clip-text text-transparent",
                  "bg-gradient-to-r from-dark-300 dark:from-light-300 to-dark-400 dark:to-light-400"
                )}
              >
                Hey There i'm Hamza 👋
              </h1>
              <p className='leading-6'>
                A passionate front-end developer for technology and love using
                my skills to create visually appealing and user-friendly web
                applications. I believe in the power of continual learning and
                am always seeking to expand my knowledge and skills.
              </p>
              <div className='hidden group-hover:flex w-10 h-10 rounded-full items-center justify-center bg-dark-400 border border-light-400 hover:opacity-40 absolute bottom-0 right-3'>
                <ArrowRight className='w-6 h-6 text-light-100 stroke-2' />
              </div>
            </div>
          </Link>
        </Card>
      </FadeIn>
    </>
  );
}
