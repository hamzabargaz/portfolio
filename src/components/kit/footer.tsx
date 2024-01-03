import React from "react";
import cx from "classnames";
import { Linkedin, Twitter, Instagram, Facebook } from "@assets/icons";
import { DM_Serif_Display } from "next/font/google";
import Card from "./card";
import { getBlocks, getDatabase, getPageFromSlug } from "@/lib/notion";
import Link from "next/link";
import { Github } from "lucide-react";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  title: string;
};

export default async function Footer({ title }: Props) {
  const data: any = await getPageFromSlug("social_media");
  const database = await getBlocks(data.id);
  const socialMedia = await getDatabase(database[0].id);

  return (
    <footer className='py-6'>
      <Card className='flex items-center w-full p-4'>
        <div className='flex items-center space-x-4'>
          <span
            className={cx(
              dmSerifDisplay.className,
              "relative flex items-center text-sm font-bold whitespace-pre leading-3"
            )}
          >
            {`${title.replace(" ", "\n")}.`}
          </span>
        </div>
        <div className='flex items-center ml-auto gap-4'>
          {socialMedia.map((item: any, i: number) => (
            <SocialItem key={i} item={item} />
          ))}
        </div>
      </Card>
    </footer>
  );
}

const SocialItem = ({ item }: any) => {
  const name = item?.properties?.name?.title[0]?.plain_text.toLowerCase();
  const url = item?.properties?.url?.url;

  const getIcon: any = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github,
    instagram: Instagram,
    facebook: Facebook,
  };

  const Icon: any = getIcon[name];

  return (
    <Link
      href={url}
      className='p-2 rounded-xl bg-light-100 dark:bg-dark-100 hover:opacity-50 cursor-pointer'
      target='_blank'
    >
      <Icon className='w-6 h-6' />
    </Link>
  );
};
