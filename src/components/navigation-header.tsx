"use client";
import {
  Section,
  NavigationMobile,
  ThemeSwitch,
  Button,
} from "@/components/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { User, Newspaper } from "lucide-react";
import Card from "./card";
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function NavigationHeader() {
  const pathname = usePathname();

  return (
    <Section>
      <header className='relative z-10'>
        <Card className='flex items-center justify-between px-6 py-4 rounded-xl'>
          <Link
            href='/'
            className={cx(
              dmSerifDisplay.className,
              "relative flex items-center text-sm font-bold whitespace-pre leading-3"
            )}
          >
            {`Hamza\nBargaz.`}
          </Link>
          <div>
            <div className='flex items-start gap-x-2 text-base leading-5'>
              <div className='hidden sm:flex gap-x-4 items-start'>
                {[
                  { href: "/about", title: "About", Icon: User },
                  { href: "/posts", title: "Posts", Icon: Newspaper },
                ].map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className={cx(
                        "px-4 py-2 font-medium rounded-xl flex items-center gap-2 border-4",
                        isActive
                          ? "bg-light-400 dark:bg-dark-400  border-light-100 dark:border-dark-100"
                          : "hover:bg-light-400 hover:dark:bg-dark-400 border-transparent hover:border-light-100 hover:dark:border-dark-100"
                      )}
                    >
                      <link.Icon className='w-5 h-5' />
                      {link.title}
                    </Link>
                  );
                })}
              </div>
              <div className='flex items-center gap-4 ml-auto border-l border-light-400 dark:border-dark-400 pl-4'>
                <Button className='px-6'>Hire me</Button>
                <Button appearance='secondary'>Copy Email</Button>
                <ThemeSwitch />
              </div>
              <NavigationMobile />
            </div>
          </div>
        </Card>
      </header>
    </Section>
  );
}
