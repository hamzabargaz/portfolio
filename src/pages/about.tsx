import React from "react";
import Layout from "../components/layout";
import { Section, Title } from "@/components";

type Props = {};

export default function About({}: Props) {
  return (
    <Layout>
      <main className="mt-44">
        <Section className="!p-0">
          <div className="flex items-center justify-between mb-20">
            <div className="flex flex-col">
              <Title>. About me</Title>
              <p className="my-6 pr-24  text-lg tracking-normal leading-8">
                I am a seasoned frontend developer with expertise in frontend,
                backend, and mobile development. My passion for technology and
                user-friendly design, combined with my continuous learning and
                collaborative approach, drives me to build impactful tech
                products. Dedicated to my work and the future of technology.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-64 h-80 bg-white" />
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
