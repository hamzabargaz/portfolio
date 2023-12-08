import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import { getDatabase, getBlocks, getPageFromSlug } from "@/lib/notion";
import Text from "@/components/text";
import { renderBlock } from "@/components/notion-render";
import styles from "@assets/styles/notion-render.module.css";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const database = await getDatabase();
  return database?.map((page: any) => {
    const slug = page.properties.slug?.formula?.string;
    return { id: page.id, slug };
  });
}

export default async function Page({ params }: any) {
  console.log("params", params);
  const page: any = await getPageFromSlug(params?.slug);
  const blocks = await getBlocks(page?.id);
  console.log("page data ============> ", page);
  console.log("blocks data ============> ", blocks);
  console.log("proprieties name ============> ", page?.properties.Name);
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
      <Head>
        <title>{page?.properties?.Name?.title[0].plain_text}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article className={styles.container}>
        <h1 className={styles.name}>
          <Text title={page?.properties.Name.title} />
        </h1>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href='/posts' className={styles.back}>
            ← Go back
          </Link>
        </section>
      </article>
    </div>
  );
}

// export const getStaticPaths = async () => {
//   const database = await getDatabase(databaseId);
//   return {
//     paths: database.map((page) => {
//       const slug = page.properties.Slug?.formula?.string;
//       return ({ params: { id: page.id, slug } });
//     }),
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   const { slug } = context.params;
//   const page = await getPage(id);
//   const blocks = await getBlocks(id);

//   return {
//     props: {
//       page,
//       blocks,
//     },
//     revalidate: 1,
//   };
// };
