import Link from "next/link";
import Card from "@/components/kit/card";
import Image from "next/image";
import { getSinglePost } from "@/lib/hygraph";
import { notFound } from "next/navigation";
import { ContentRender } from "@/components";
import cx from "classnames";
import { Metadata } from "next";

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
    excerpt: description,
    hero_image: { url: ogImage },
  } = post;
  const publishedTime = new Date(date).toISOString();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
    </Card>
  );
}
