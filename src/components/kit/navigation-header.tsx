"use client";
import { Section, ThemeSwitch, CTA } from "@/components/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { User, Newspaper, LucideIcon } from "lucide-react";
import Card from "./card";
import { DM_Serif_Display } from "next/font/google";
import { Close, Menu } from "@/assets/icons";
import { useEffect, useState } from "react";
import { useMobile } from "@/hooks";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

// Types
type Props = {
  title: string;
  total_posts: number;
};

type NavItem = {
  href: string;
  title: string;
  Icon: LucideIcon;
};

type MenuToggleProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isMobile: boolean;
};

// Constants
const GLASS_STYLES = {
  container:
    "bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20",
  navLink: {
    base: "px-4 py-2 font-medium rounded-xl flex items-center gap-2 border backdrop-blur-sm transition-all duration-200",
    active:
      "bg-white/30 dark:bg-white/10 border-white/40 dark:border-white/20 shadow-sm",
    hover:
      "hover:bg-white/20 hover:dark:bg-white/5 border-transparent hover:border-white/30 hover:dark:border-white/15",
  },
  ctaSection:
    "bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10",
  divider: "border-white/20 dark:border-white/10",
};

// Utils
const getNavItems = (total_posts: number): NavItem[] => [
  { href: "/about", title: "About", Icon: User },
  ...(total_posts !== 0
    ? [{ href: "/posts", title: "Posts", Icon: Newspaper }]
    : []),
];

const getNavLinkClasses = (isActive: boolean) =>
  cx(
    GLASS_STYLES.navLink.base,
    isActive ? GLASS_STYLES.navLink.active : GLASS_STYLES.navLink.hover
  );

// Main Component
export default function NavigationHeader({ title, total_posts }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();
  const pathname = usePathname();

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [pathname]);

  const formattedTitle = `${title.replace(" ", "\n")}.`;

  return (
    <Section className='sticky top-5 z-20 rounded-3xl backdrop-blur-xl'>
      <header>
        <Card className={cx("px-6 py-4", GLASS_STYLES.container)}>
          <div className='flex items-center justify-between'>
            <BrandLogo title={formattedTitle} />
            <NavigationControls
              total_posts={total_posts}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isMobile={isMobile}
            />
          </div>
        </Card>

        {isMobile && isOpen && (
          <Card
            className={cx("block sm:hidden mt-3 p-4", GLASS_STYLES.container)}
          >
            <MobileNavigation total_posts={total_posts} />
          </Card>
        )}
      </header>
    </Section>
  );
}

// Sub-components
const BrandLogo = ({ title }: { title: string }) => (
  <Link
    href='/'
    className={cx(
      dmSerifDisplay.className,
      "flex items-center text-sm font-bold whitespace-pre leading-3"
    )}
  >
    {title}
  </Link>
);

const NavigationControls = ({
  total_posts,
  isOpen,
  setIsOpen,
  isMobile,
}: {
  total_posts: number;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isMobile: boolean;
}) => (
  <div className='flex items-center ml-auto'>
    <DesktopNavigation total_posts={total_posts} />
    <ThemeSwitch />
    <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
  </div>
);

const MenuToggle = ({ isOpen, setIsOpen, isMobile }: MenuToggleProps) => {
  const iconClasses = "w-7 h-7 block sm:hidden shrink-0";

  return (
    <button
      className='cursor-pointer'
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isMobile && isOpen ? (
        <Close classNames={iconClasses} />
      ) : (
        <Menu classNames={iconClasses} />
      )}
    </button>
  );
};

const MobileNavigation = ({ total_posts }: { total_posts: number }) => {
  const pathname = usePathname();
  const navItems = getNavItems(total_posts);

  return (
    <div className='flex sm:hidden flex-col gap-2 text-sm mt-6'>
      {navItems.map((link) => (
        <NavLink
          key={link.title}
          item={link}
          isActive={pathname === link.href}
        />
      ))}

      <div
        className={cx(
          "flex items-center justify-center gap-x-2 p-1 rounded-xl",
          GLASS_STYLES.ctaSection
        )}
      >
        <CTA />
      </div>
    </div>
  );
};

const DesktopNavigation = ({ total_posts }: { total_posts: number }) => {
  const pathname = usePathname();
  const navItems = getNavItems(total_posts);

  return (
    <div className='hidden sm:flex items-center gap-x-2 text-base leading-5'>
      <div className='hidden sm:flex gap-x-4 items-start'>
        {navItems.map((link) => (
          <NavLink
            key={link.title}
            item={link}
            isActive={pathname === link.href}
          />
        ))}
      </div>

      <div
        className={cx(
          "hidden md:flex pl-2 gap-4 border-l",
          GLASS_STYLES.divider
        )}
      >
        <CTA />
      </div>
    </div>
  );
};

const NavLink = ({ item, isActive }: { item: NavItem; isActive: boolean }) => (
  <Link href={item.href} className={getNavLinkClasses(isActive)}>
    <item.Icon className='w-5 h-5' />
    {item.title}
  </Link>
);
