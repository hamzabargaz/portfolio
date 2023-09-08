"use client";
import { Section, NavigationMobile, ThemeSwitch } from "@/components/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { User, Newspaper } from "lucide-react";
import Card from "./card";

export default function NavigationHeader() {
  const pathname = usePathname();

  return (
    <Section>
      <header className='relative z-10'>
        <Card className='flex items-center justify-between px-6 py-4 rounded-xl text-[#EEEEEE]'>
          <Link
            href='/'
            className='relative flex items-center text-xl font-bold'
          >
            {`# HB.`}
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
                        "px-4 py-2 font-medium rounded-xl flex items-center gap-2 ",
                        isActive
                          ? "bg-gray-[#1f1f1f] bg-[#282828] border-4 border-[#1f1f1f]"
                          : "hover:bg-[#282828] border-4 border-transparent hover:border-[#1f1f1f]"
                      )}
                    >
                      <link.Icon className='w-5 h-5' />
                      {link.title}
                    </Link>
                  );
                })}
              </div>
              <div className='flex items-center gap-4 ml-auto border-l border-[#282828] pl-4'>
                <CTABtn className='bg-[#282828] border-4 border-[#1f1f1f]'>
                  Hire me
                </CTABtn>
                <CTABtn className='bg-white text-black'>Contact</CTABtn>
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

type TCTABtn = {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
};

const CTABtn = ({ children, className = "", ...props }: TCTABtn) => {
  return (
    <button
      className={cx(
        className,
        "px-4 py-2 font-medium rounded-lg hover:bg-opacity-75"
      )}
      {...props}
    >
      {children}
    </button>
  );
};
