"use client";
import { Section, NavigationMobile, ThemeSwitch } from "@/components/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { Theme } from "@/typings";

type Props = {
  theme: Theme | any;
};

export default function NavigationHeader({ theme }: Props) {
  const pathname = usePathname();

  return (
    <Section>
      <header className='relative z-10 pt-24 md:pt-12 flex justify-between'>
        <Link href='/' className='relative flex items-center text-2xl'>
          HB
        </Link>
        <div>
          <div className='flex items-start text-base leading-5'>
            <div className='hidden sm:flex items-start'>
              {[
                { href: "/about", title: "About" },
                { href: "/posts", title: "Posts" },
              ].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={cx(
                      "px-3 py-1 font-medium text-primary dark:text-tertiary",
                      isActive &&
                        "after:content-[''] after:border-b-2 after:border-primary after:dark:border-tertiary after:w-6 after:block after:mx-auto after:mb-1 after:mt-1"
                    )}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
            <ThemeSwitch theme={theme} />
            <NavigationMobile />
          </div>
        </div>
      </header>
    </Section>
  );
}
