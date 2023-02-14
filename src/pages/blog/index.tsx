import { Section } from "@/components";
import ArticlesList from "@/layout/ArticlesList";
import React from "react";
import Layout from "../../components/layout";

type Props = {};

export default function Blogs({}: Props) {
  return (
    <Layout>
      <Section>
        <h1 className="text-8xl text-center my-24 font-serif tracking-widest">
          Articles
        </h1>
        <ArticlesList />
      </Section>
    </Layout>
  );
}
