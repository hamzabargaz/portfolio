import Head from "next/head";
import Link from "next/link";
import Card from "@/components/kit/card";
import Image from "next/image";
import { getSinglePost } from "@/lib/hygraph";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { notFound } from "next/navigation";

export default async function Page({ params }: any) {
  const post: any = await getSinglePost(params?.slug);

  if (!post) {
    return notFound();
  }

  return (
    <Card className='p-6 mt-3 h-full'>
      <article className='px-5 max-w-2xl mx-auto leading-6 whitespace-pre-line'>
        <h1 className='text-center'>{post.title}</h1>
        <Image
          src={post.hero_image.url}
          alt={post.title}
          width={post.hero_image.width}
          height={post.hero_image.height}
          className='h-full w-full object-fill rounded-xl my-10'
        />
        <section>
          <RichText content={post.content.raw} />
          <Link href='/posts' className='inline-block my-10'>
            ← Go back
          </Link>
        </section>
      </article>
    </Card>
  );
}
