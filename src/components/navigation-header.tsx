import { Section, Link, NavigationMobile, ThemeSwitch } from "@/components";
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
            <div className="hidden sm:block">
              {paths.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
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
