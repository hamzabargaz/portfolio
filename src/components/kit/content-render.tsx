import React from "react";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import Image from "next/image";
import Link from "next/link";

type Props = {
  content: string; // Raw MDX content
};

function CustomLink({
  href,
  children,
  ...props
}: React.LinkHTMLAttributes<HTMLAnchorElement>) {
  if (href?.startsWith("/")) {
    return (
      <Link
        href={href}
        className='text-blue-600 hover:text-blue-800 underline'
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return (
      <a
        href={href}
        className='text-blue-600 hover:text-blue-800 underline'
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='text-blue-600 hover:text-blue-800 underline'
      {...props}
    >
      {children}
    </a>
  );
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />;
}

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: any) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: `text-${
          level === 1 ? "4xl" : level === 2 ? "3xl" : "2xl"
        } font-bold mt-6 mb-4`,
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  p: ({ children }: any) => <p className='mb-4'>{children}</p>,
  pre: ({ children, ...props }: any) => {
    return (
      <pre
        className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto'
        {...props}
      >
        {children}
      </pre>
    );
  },
};

export default function ContentRender({ content }: Props) {
  if (!content) {
    console.error("Content is undefined or null");
    return <div>Content not available</div>;
  }

  try {
    return <MDXRemote source={content} components={components} />;
  } catch (error) {
    console.error("Error rendering MDX content:", error);
    return <div>Error rendering content</div>;
  }
}
