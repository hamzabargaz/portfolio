import React from "react";
import cx from "classnames";
import { Linkedin, Twitter, Instagram } from "@assets/icons";
import { DM_Serif_Display } from "next/font/google";
import Card from "./card";
import Link from "next/link";
import { Github } from "lucide-react";
import { getAuthor } from "@/lib/json-data";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  title: string;
};

export default async function Footer({ title }: Props) {
  const author: any = await getAuthor();
  const socialLinks = author.social_links;

  return (
    <footer className='py-6'>
      <Card className='flex items-center w-full p-4 !bg-transparent'>
        <div className='flex items-center space-x-4'>
          <Link
            href='/'
            className={cx(
              dmSerifDisplay.className,
              "flex items-center text-sm font-bold whitespace-pre leading-3"
            )}
          >
            {`${title.replace(" ", "\n")}.`}
          </Link>
        </div>
        <div className='flex items-center ml-auto gap-4'>
          {socialLinks.map((item: any, i: number) => (
            <SocialItem key={i} item={item} />
          ))}
        </div>
      </Card>
    </footer>
  );
}

const SocialItem = ({ item }: any) => {
  const { url, name } = item;

  const getIcon: any = {
    linkedin: Linkedin,
    github: Github,
    instagram: Instagram,
    x: Twitter,
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
