import React from "react";
import Title from "@/components/ui/title";
import Card from "@/components/kit/card";
import { FadeIn } from "@/components/kit/animate";

type Props = {};

export default async function About({}: Props) {
  return (
    <main className='mt-4'>
      <FadeIn>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <Title>About me</Title>
              <p>
                Hi there! My name is Hamza Bargaz, and I am a front-end
                developer. I have a deep passion for technology and love using
                my skills to create visually appealing and user-friendly web
                applications. I believe in the power of continual learning and
                am always seeking to expand my knowledge and skills. As a team
                player, I believe in the importance of collaboration and am
                always willing to help my co-workers and share my expertise. I
                am driven by the desire to build amazing tech products that make
                a positive impact on people's lives. In my current role as a
                front-end developer, I am using my skills to build and maintain
                high-quality web applications that deliver exceptional user
                experiences. I am excited about the future of technology and am
                eager to continue learning and growing in my career.
              </p>
            </div>
          </div>
        </Card>
      </FadeIn>
    </main>
  );
}
