import { WavingHand } from "@/assets/icons";
// import Title from "@/components/title";
import Image from "next/image";
import cx from "classnames";
import { Roboto_Mono } from "next/font/google";
// import Posts from "./posts/list-posts";
import Avatar from "@assets/images/me.jpg";
import Card from "@/components/card";
import {
  Github,
  Layers,
  Linkedin,
  Newspaper,
  Twitter,
  XIcon,
} from "lucide-react";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className='mt-10 pb-20'>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 text-[#EEEEEE]'>
        <Card className='p-6'>
          <div className='flex flex-col'>
            <h2 className='mb-2 text-3xl font-bold'>
              Crafting Seamless User Experiences, Frontend Engineer
              Extraordinaire
            </h2>
            <h2 className='mb-6 text-2xl font-bold opacity-40'>
              @Hamza_bargaz
            </h2>
            <p className='font-normal'>
              Committed to elevating user experiences through code, I'm a
              frontend developer with a talent for harmonizing aesthetics and
              functionality.
            </p>
          </div>
        </Card>
        <Card className='flex flex-col items-center gap-3 justify-center'>
          <div className='w-32 h-32 rounded-full border-8 border-[#282828]'>
            <Image
              src={Avatar}
              alt='my picture'
              className='rounded-full w-full h-full object-cover bg-blend-overlay shrink-0'
            />
          </div>
          <h1 className='text-lg font-medium'>Hamza Bargaz</h1>
          <h3 className='opacity-40'>Frontend Developer</h3>
        </Card>
      </div>
      <div className='mt-6 grid grid-cols-3 gap-4'>
        <Card className='text-white p-6'>
          <h3 className='mb-6'> Featured Projects</h3>
          <div className=' gap-4 flex flex-col'>
            <div className='flex items-center gap-4'>
              <div className='p-4 rounded-xl bg-[#222]'>
                <Layers />
              </div>
              <div>
                <div>Project 1</div>
                <p>Project 1 description</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='p-4 rounded-xl bg-[#222]'>
                <Layers />
              </div>
              <div>
                <div>Project 1</div>
                <p>Project 1 description</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='p-4 rounded-xl bg-[#222]'>
                <Layers />
              </div>
              <div>
                <div>Project 1</div>
                <p>Project 1 description</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='p-4 rounded-xl bg-[#222]'>
                <Layers />
              </div>
              <div>
                <div>Project 1</div>
                <p>Project 1 description</p>
              </div>
            </div>
          </div>
        </Card>
        <div className='col-span-2 grid grid-cols-2 gap-4'>
          <Card className='h-80 col-span-2 text-white p-6'>
            <h3 className='mb-6'>Recent Posts</h3>
            <div className='flex flex-col gap-4'>
              <div className='rounded-xl p-4 hover:bg-[#222] flex'>
                <div className='w-1/3 bg-[#1c1c1c] h-32 rounded-xl p-4 flex items-center justify-center'>
                  <Newspaper />
                </div>
                <div className='pl-6 w-2/3 flex flex-col gap-4'>
                  <div className='flex items-center'>
                    <div className='p-2 bg-[#1c1c1c] rounded-xl'>Tag 1</div>
                    <div className='ml-auto'>8 Minutes- 13, August 2023</div>
                  </div>
                  <div className=''>
                    <h4 className='text-lg font-medium'>Post 1</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti voluptatum ipsum laborum voluptates vero amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className='h-20 col-span-2'>
            <div className='flex items-center w-full p-4 text-white'>
              <div className='flex items-center text-xl font-bold'>
                {`# HB.`}
              </div>
              <div className='flex items-center ml-auto gap-4'>
                <div className='p-2 rounded-xl bg-[#222] hover:opacity-50 cursor-pointer'>
                  <Twitter />
                </div>
                <div className='p-2 rounded-xl bg-[#222] hover:opacity-50 cursor-pointer'>
                  <Linkedin />
                </div>
                <div className='p-2 rounded-xl bg-[#222] hover:opacity-50 cursor-pointer'>
                  <Github />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
