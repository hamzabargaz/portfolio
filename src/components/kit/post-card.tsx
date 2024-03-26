import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Newspaper } from "lucide-react";
import Badge from "../ui/badge";
import { ArrowRight } from "@/assets/icons";
import { Button } from "..";
import Card from "./card";

export default function Post(post: any) {
  const { title, excerpt, tags, hero_image, slug } = post;

  return (
    <Link href={"/posts/" + slug}>
      <Card>
        <div className='flex flex-wrap rounded-3xl bg-light-200 dark:bg-dark-200 group relative -mx-4 -mb-4'>
          <div className='py-6 px-7 w-full flex flex-col gap-4'>
            <div className=''>
              <h2 className='text-3xl font-medium font-sans mb-6 leading-10'>
                {title}
              </h2>
              <p className='font-light mb-8'>{excerpt}</p>
              <div className='hidden group-hover:flex w-10 h-10 rounded-full items-center justify-center bg-dark-400/80 border border-light-400 hover:opacity-40 absolute bottom-5 right-5'>
                <ArrowRight className='w-6 h-6 text-light-100 stroke-2' />
              </div>
            </div>
          </div>

          {!hero_image && (
            <div className='w-full bg-light-200 dark:bg-dark-200 h-44 rounded-b-xl flex items-center justify-center'>
              <Image
                alt={post.slug}
                src={hero_image.url}
                width={hero_image.width}
                height={hero_image.height}
                className='h-full w-full object-cover rounded-b-xl'
              />
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
