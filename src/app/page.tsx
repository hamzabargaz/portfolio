import { WavingHand } from "@/assets/icons";
import Title from "@/components/title";
import Image from "next/image";
import cx from "classnames";
import { Roboto_Mono } from "next/font/google";
import Posts from "./posts/list-posts";
import Avatar from "@assets/images/me.jpg";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className='mt-20 pb-20'>
      <div className='flex flex-col'>
        <div className='grid grid-cols-1 md:grid-cols-3 mb-20'>
          <div className='order-2 md:order-1 flex flex-col max-w-lg col-span-1 md:col-span-2'>
            <Title>
              Hi
              <WavingHand className='w-6 mx-1' />,
            </Title>
            <h1
              className={cx(
                "my-4 text-3xl tracking-tighter font-light",
                robotoMono.className
              )}
            >
              I&apos;m Hamza Bargaz
            </h1>
            <p className='mb-6 font-extralight text-xl tracking-wide'>
              I&apos;m a frontend developer with experience ranging from
              frontend over backend to mobile development and I have written
              apps with technologies in all of these sections.
            </p>
          </div>
          <div className='order-1 md:order-2 mb-20 md:mb-0 flex justify-center w-full'>
            <div className='w-52 h-52 rounded-full'>
              <Image
                src={Avatar}
                alt='my picture'
                className='rounded-full w-full h-full object-cover bg-blend-overlay shrink-0'
              />
            </div>
          </div>
        </div>
        {/* recent posts */}
        <div className='flex items-start mt-20'>
          <div className='flex flex-col w-full'>
            <div className='flex items-end mb-4 font-serif text-3xl tracking-wide'>
              <span>Recent</span>
              <span className='text-secondary mx-1'>Posts</span>
              <hr className='ml-2 w-full mb-2 border-primary dark:border-tertiary' />
            </div>
            <Posts />
          </div>
        </div>
      </div>
    </main>
  );
}
