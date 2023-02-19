import React from "react";
import Layout from "../components/layout";
import { Link, Section, Title } from "@/components";
import { ArrowUpRight, GithubIcon, LinkedinIcon } from "@/icons";
import Image from "next/image";
import { avatar } from "../lib/info";

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
                Hi there! My name is Hamza Bargaz, and I am a frontend
                developer. I have a deep passion for technology and love using
                my skills to create visually appealing and user-friendly web
                applications. I believe in the power of continual learning and
                am always seeking to expand my knowledge and skills.
                <br />
                <br />
                As a team player, I believe in the importance of collaboration
                and am always willing to help my co-workers and share my
                expertise. I am driven by the desire to build amazing tech
                products that make a positive impact on people&apos;s lives.
                <br />
                <br />
                In my current role as a frontend developer, I am using my skills
                to build and maintain high-quality web applications that deliver
                exceptional user experiences. I am excited about the future of
                technology and am eager to continue learning and growing in my
                career.
                <br />
                <br />
              </p>
              <div className="flex items-center gap-4">
                <SocialLink
                  href="https://github.com/hamzabargaz/"
                  icon={GithubIcon}
                  name="Github"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/hamzabargaz/"
                  icon={LinkedinIcon}
                  name="Linkedin"
                />
              </div>
            </div>
            {/* <div className="flex justify-center w-full">
              <div className="w-64 h-80 bg-white" />
              <Image
                src={avatar}
                alt="my picture"
                width={256}
                height={320}
                className="bg-blend-overlay rounded-full"
              />
            </div> */}
          </div>
        </Section>
      </main>
    </Layout>
  );
}

type SocialLinkProps = {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
};

const SocialLink = ({ href, icon: Icon, name }: SocialLinkProps) => {
  return (
    <Link
      className="flex items-center border rounded-lg p-2 cursor-pointer hover:bg-white/20"
      href={href}
    >
      <div className="flex items-center">
        <Icon className="w-5 h-5" />
        <span className="ml-3">{name}</span>
      </div>
      <ArrowUpRight className="ml-6 w-5 h-5" />
    </Link>
  );
};
