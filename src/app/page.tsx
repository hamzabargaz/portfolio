import { WavingHand } from "@/assets/icons";
// import Title from "@/components/title";
import Image from "next/image";
import cx from "classnames";
import { DM_Serif_Display } from "next/font/google";
// import Posts from "./posts/list-posts";
import Avatar from "@assets/images/me.jpg";
import Card from "@/components/card";
import {
  Calendar,
  Droplet,
  Github,
  Layers,
  Linkedin,
  MapPin,
  Newspaper,
  Pin,
  PinIcon,
  Twitter,
  XIcon,
} from "lucide-react";
import { Badge, Button } from "@/components";
import Link from "next/link";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className='mt-3 pb-20 md:pb-0'>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mb-4'>
        <Card className='p-6'>
          <div className='flex flex-col justify-center items-center text-center'>
            <div className='w-32 h-32 rounded-full border-8 border-[#EEEEEE] dark:border-[#282828]'>
              <Image
                src={Avatar}
                alt='my picture'
                className='rounded-full w-full h-full object-cover bg-blend-overlay shrink-0'
              />
            </div>
            <h1 className='text-xl font-medium my-4'>Hamza Bargaz</h1>
            <p className='font-light italic'>
              Committed to elevating user experiences through code, I'm a
              frontend developer with a talent for harmonizing aesthetics and
              functionality.
              <Link href='/about' className='mx-1 underline'>
                read more about me
              </Link>
            </p>
            <div className='flex items-center gap-4 mt-4'>
              <Button>Hire me</Button>
              <Button appearance='secondary'>Contact</Button>
            </div>
          </div>
        </Card>
        <Card className='p-6'>
          <h3 className='mb-6'> Featured Projects</h3>
          <div className=' gap-4 flex flex-col max-h-72 overflow-auto pr-4'>
            {Array.from({ length: 4 }).map((_, i) => (
              <Project
                key={i}
                title={`Project ${i + 1}`}
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
              />
            ))}
          </div>
        </Card>
      </div>
      <Card className='h-80 p-4 mb-3'>
        <h3 className='mb-6'>Recent Posts</h3>
        <div className='flex flex-col gap-4 max-h-60 overflow-auto pr-4 relative'>
          {Array.from({ length: 4 }).map((_, i) => (
            <Post key={i} />
          ))}
        </div>
      </Card>
      <Card className='h-20 col-span-2'>
        <div className='flex items-center w-full p-4'>
          <div className='flex items-center space-x-4'>
            <span
              className={cx(
                dmSerifDisplay.className,
                "relative flex items-center text-sm font-bold whitespace-pre leading-3"
              )}
            >
              {`Hamza\nBargaz.`}
            </span>
            {/* <span className=''>All rights reserved</span> */}
          </div>
          <div className='flex items-center ml-auto gap-4'>
            <div className='p-2 rounded-xl bg-light-100 dark:bg-dark-100 hover:opacity-50 cursor-pointer'>
              <Twitter />
            </div>
            <div className='p-2 rounded-xl bg-light-100 dark:bg-dark-100 hover:opacity-50 cursor-pointer'>
              <Linkedin />
            </div>
            <div className='p-2 rounded-xl bg-light-100 dark:bg-dark-100 hover:opacity-50 cursor-pointer'>
              <Github />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

type TProject = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const Project = ({ title, description, icon: Icon }: TProject) => {
  return (
    <div className='flex flex-col gap-4 rounded-xl bg-light-100 dark:bg-dark-100 p-4'>
      <div className='flex items-start justify-between'>
        <div className='p-2 rounded-xl bg-light-200 dark:bg-dark-200'>
          {Icon ?? <Layers />}
        </div>
        <div className='flex gap-2 text-xs'>
          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4' /> <span>date xxx | date xxx</span>
          </div>
          <div className='flex items-center gap-1'>
            <MapPin className='w-4 h-4' /> <span>Tallinn, Estonia</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>{title}</div>
        <p>{description}</p>
        <div className='flex items-center gap-4'>
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>Typescript</Badge>
        </div>
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <div className='rounded-xl p-4 bg-light-100 dark:bg-dark-100 flex'>
      <div className='w-1/3 bg-light-200 dark:bg-dark-200 h-32 rounded-xl p-4 flex items-center justify-center'>
        <Newspaper />
      </div>
      <div className='pl-6 w-2/3 flex flex-col gap-4'>
        <div className=''>
          <h4 className='text-lg font-medium mb-2'>Post 1</h4>
          <div className='flex items-center mb-4'>
            <div className='p-2 bg-light-200 dark:bg-dark-200 rounded-xl'>
              Tag 1
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatum ipsum laborum voluptates vero amet
          </p>
        </div>
      </div>
    </div>
  );
};
