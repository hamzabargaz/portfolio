import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function CustomLink({
  href,
  children,
  className,
  onClick,
}: Props) {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={href} className={className} onClick={onClick} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={className}
      onClick={onClick}
    />
  );
}
