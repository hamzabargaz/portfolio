import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import { getBlocks, getPageFromSlug } from "@/lib/notion";
import Text from "@/components/text";
import { renderBlock } from "@/components/notion-render";
import styles from "@assets/styles/notion-render.module.css";
import Card from "@/components/card";

export default async function Page({ params }: any) {
  const page: any = await getPageFromSlug(params?.slug);
  const blocks = await getBlocks(page?.id);

  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
      <Head>
        <title>{page?.properties?.Name?.title[0].plain_text}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Card className='p-6 mt-3 h-full'>
        <article className={styles.container}>
          <h1 className={styles.name}>
            <Text title={page?.properties.Name.title} />
          </h1>
          <section>
            {blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
            <Link href='/posts' className={styles.back + " mt-10"}>
              ← Go back
            </Link>
          </section>
        </article>
      </Card>
    </div>
  );
}
