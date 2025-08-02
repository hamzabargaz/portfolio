import React from "react";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { codeToHtml } from "shiki";
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

// Shiki Code Block Component
async function ShikiCodeBlock({ children, className, ...props }: any) {
  const lang = className?.replace(/language-/, "") || "text";

  try {
    const lightHtml = await codeToHtml(children, {
      lang,
      theme: "min-light",
    });

    const darkHtml = await codeToHtml(children, {
      lang,
      theme: "one-dark-pro",
    });

    return (
      <>
        <div
          className='block dark:hidden [&_pre]:!bg-gray-50 [&_pre]:!border [&_pre]:!border-gray-200 [&_pre]:!rounded-lg [&_pre]:!p-4 [&_pre]:!text-sm [&_pre]:!mb-10 [&_pre]:!overflow-x-auto'
          dangerouslySetInnerHTML={{ __html: lightHtml }}
        />
        <div
          className='hidden dark:block [&_pre]:!bg-gray-900 [&_pre]:!border [&_pre]:!border-gray-700 [&_pre]:!rounded-lg [&_pre]:!p-4 [&_pre]:!text-sm [&_pre]:!mb-10 [&_pre]:!overflow-x-auto'
          dangerouslySetInnerHTML={{ __html: darkHtml }}
        />
      </>
    );
  } catch (error) {
    // Fallback to simple code block
    return (
      <pre
        className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-10'
        {...props}
      >
        <code>{children}</code>
      </pre>
    );
  }
}

// Inline Code Component
function InlineCode({ children, ...props }: any) {
  return (
    <code
      className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-1 py-0.5 rounded text-sm font-mono'
      {...props}
    >
      {children}
    </code>
  );
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
  code: ({ children, className, ...props }: any) => {
    // If it has a className, it's a code block, otherwise it's inline code
    if (className) {
      return (
        <ShikiCodeBlock className={className} {...props}>
          {children}
        </ShikiCodeBlock>
      );
    }
    return <InlineCode {...props}>{children}</InlineCode>;
  },
  p: ({ children }: any) => <p className='mb-10 leading-relaxed'>{children}</p>,
  ul: ({ children }: any) => (
    <ul className='list-disc mb-10 ml-6 space-y-2'>{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className='list-decimal mb-10 ml-6 space-y-2'>{children}</ol>
  ),
  li: ({ children }: any) => <li>{children}</li>,
  strong: ({ children }: any) => (
    <strong className='font-semibold'>{children}</strong>
  ),
  em: ({ children }: any) => <em className='italic'>{children}</em>,
  blockquote: ({ children }: any) => (
    <blockquote className='border-l-4 border-blue-500 pl-4 py-2 mb-10 bg-blue-50 dark:bg-blue-900/10 italic'>
      {children}
    </blockquote>
  ),
  hr: () => <hr className='my-8 border-gray-300 dark:border-gray-600' />,
  pre: ({ children, ...props }: any) => {
    // This handles the case where pre is used without code highlighting
    return (
      <pre className='mb-10' {...props}>
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
