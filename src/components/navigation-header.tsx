import {
  Section,
  ActiveLink,
  Link,
  NavigationMobile,
  ThemeSwitch,
} from "@/components";
import { paths } from "@/lib";

type Props = {};

export default function NavigationHeader({}: Props) {
  return (
    <Section>
      <header className="relative z-10 pt-24 md:pt-12 flex justify-between">
        <Link href="/">
          <div className="relative flex items-center hover:translate-x-1">
            <span className="text-2xl">HB</span>
          </div>
        </Link>
        <div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:flex items-start">
              {paths.map((link) => (
                <ActiveLink
                  key={link.title}
                  href={link.href}
                  activeClassName="after:content-[''] after:border-b-2 after:border-primary after:dark:border-tertiary after:w-6 after:block after:mx-auto after:mb-1 after:mt-1"
                  className="px-3 py-1 font-medium text-primary dark:text-tertiary"
                >
                  {link.title}
                </ActiveLink>
              ))}
            </div>
            <ThemeSwitch />
            <NavigationMobile />
          </div>
        </div>
      </header>
    </Section>
  );
}
