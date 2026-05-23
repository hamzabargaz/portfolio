import Link from "next/link";
import Image from "next/image";
import { getSinglePost } from "@/lib/mdx-posts";
import { notFound } from "next/navigation";
import { ContentRender, BlogPostingSchema } from "@/components";
import cx from "classnames";
import { Metadata } from "next";
import { FadeIn } from "@/components/kit/animate";
import { formatDateToISO } from "@/lib/date-utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const post = await getSinglePost(resolvedParams?.slug);
  if (!post) {
    return;
  }

  const {
    title,
    date,
    excerpt,
    hero_image: { url: image, width, height },
    seo,
  } = post;
  const publishedTime = formatDateToISO(date);
  const { openGraph, twitter } = seo || {};
  return {
    title,
    description: excerpt,
    openGraph: {
      type: "article",
      title,
      description: excerpt,
      publishedTime,
      url: openGraph?.url || "",
      siteName: openGraph?.siteName || "",
      locale: "en_US",
      tags: post?.tags,
      authors: openGraph?.authors || [],
      images: [
        {
          url: image,
          width,
          height,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      creator: twitter?.creator || "",
      site: twitter?.site || "",
      description: excerpt,
      images: [image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getSinglePost(resolvedParams?.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className='mt-20 h-full'>
      <FadeIn>
        <article className='px-5 mx-auto'>
          <h1
            className={cx(
              "text-center text-3xl md:text-5xl font-bold my-10 font-sans leading-normal"
            )}
          >
            {post.title}
          </h1>
          <Image
            src={post.hero_image.url}
            alt={post.title}
            width={post.hero_image.width}
            height={post.hero_image.height}
            className='h-full w-full object-fill rounded-xl my-10'
            priority
          />
          <section className='text-lg'>
            <ContentRender content={post.content} />
            <Link href='/posts' className='inline-block my-10'>
              ← Go back
            </Link>
          </section>
        </article>
        <BlogPostingSchema post={post} />
      </FadeIn>
    </div>
  );
}
