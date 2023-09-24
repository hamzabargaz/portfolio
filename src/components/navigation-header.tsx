"use client";
import { Section, ThemeSwitch, Button } from "@/components/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { User, Newspaper } from "lucide-react";
import Card from "./card";
import { DM_Serif_Display } from "next/font/google";
import { Close, Menu } from "@/assets/icons";
import { useEffect, useState } from "react";
import { useMobile } from "@/hooks";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();
  const pathname = usePathname();

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <Section>
      <header className='relative z-10'>
        <Card className='px-6 py-4 rounded-xl'>
          <div className='flex items-center justify-between'>
            <Link
              href='/'
              className={cx(
                dmSerifDisplay.className,
                "relative flex items-center text-sm font-bold whitespace-pre leading-3"
              )}
            >
              {`Hamza\nBargaz.`}
            </Link>
            <div className='flex items-center ml-auto'>
              <NavItems />
              <ThemeSwitch />
              <MenuToggle
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isMobile={isMobile}
              />
            </div>
          </div>
        </Card>
        {isMobile && isOpen && (
          <Card className='block sm:hidden mt-3 p-4'>
            <MobileNav />
          </Card>
        )}
      </header>
    </Section>
  );
}

type TMenuToggle = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  isMobile: boolean;
};

const MenuToggle = ({ isOpen, setIsOpen, isMobile }: TMenuToggle) => {
  const iconClassNames = "w-7 h-7 block sm:hidden shrink-0";
  return (
    <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
      {isMobile && isOpen ? (
        <Close classNames={iconClassNames} />
      ) : (
        <Menu classNames={iconClassNames} />
      )}
    </div>
  );
};

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className='flex sm:hidden flex-col gap-2 text-sm mt-6'>
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
      <div className='flex justify-center gap-2 bg-light-100/50 dark:bg-dark-100/50 p-1 rounded-xl'>
        <Button className='px-6 w-1/2'>Hire me</Button>
        <Button appearance='secondary' className=' w-1/2'>
          Copy Email
        </Button>
      </div>
    </div>
  );
};

const NavItems = () => {
  const pathname = usePathname();
  return (
    <div className='hidden sm:flex items-start gap-x-2 text-base leading-5 '>
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
      <div className='hidden md:flex pl-2 gap-4 border-l border-light-400 dark:border-dark-400'>
        <Button className='px-6'>Hire me</Button>
        <Button appearance='secondary'>Copy Email</Button>
      </div>
    </div>
  );
};
