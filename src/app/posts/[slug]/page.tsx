import Link from "next/link";
import Card from "@/components/kit/card";
import Image from "next/image";
import { getSinglePost } from "@/lib/hygraph";
import { notFound } from "next/navigation";
import { ContentRender } from "@/components";
import cx from "classnames";
import { Metadata } from "next";
import { FadeIn } from "@/components/kit/animate";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  let post = await getSinglePost(params?.slug);
  if (!post) {
    return;
  }

  let {
    title,
    date,
    excerpt,
    hero_image: { url: image, width, height },
    seo,
  } = post;
  const publishedTime = new Date(date).toISOString();
  const { openGraph, twitter } = seo;
  return {
    title,
    description: excerpt,
    openGraph: {
      type: "article",
      title,
      description: excerpt,
      publishedTime,
      url: openGraph.url,
      siteName: openGraph.siteName,
      locale: "en_US",
      tags: post?.tags,
      authors: openGraph.authors,
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
      creator: twitter.creator,
      site: twitter.site,
      description: excerpt,
      images: [image],
    },
  };
}

export default async function Page({ params }: any) {
  const post: any = await getSinglePost(params?.slug);

  if (!post) {
    return notFound();
  }

  return (
    <Card className='p-6 mt-3 h-full'>
      <FadeIn>
        <article className='px-5 mx-auto leading-6 whitespace-pre-line'>
          <h1
            className={cx(
              "text-center text-3xl md:text-5xl font-bold my-6 font-sans leading-normal"
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
          />
          <section className='text-lg'>
            <ContentRender content={post.content.raw} />
            <Link href='/posts' className='inline-block my-10'>
              ← Go back
            </Link>
          </section>
        </article>
      </FadeIn>
    </Card>
  );
}
