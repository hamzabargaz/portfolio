import Link from "next/link";
import Card from "@/components/kit/card";
import Image from "next/image";
import { getSinglePost } from "@/lib/hygraph";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { notFound } from "next/navigation";
import { ContentRender } from "@/components";
import { Inter } from "next/font/google";
import cx from "classnames";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default async function Page({ params }: any) {
  const post: any = await getSinglePost(params?.slug);

  if (!post) {
    return notFound();
  }

  return (
    <Card className='p-6 mt-3 h-full'>
      <article className='px-5 max-w-2xl mx-auto leading-6 whitespace-pre-line'>
        <h1
          className={cx(
            "text-center text-5xl font-bold my-6 font-sans leading-normal"
            // inter.className
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
