import React from "react"
import { Layout } from "../components"

export default () => {
  return (
    <Layout>
      <div className="flex flex-wrap h-screen">
        <div className="w-full flex items-center text-white">
          <div className="flex flex-col px-8 font-thin max-w-lg">
            <div className="flex flex-wrap items-end mb-4 font-thin text-2xl">
              <span>
                <span className="text-secondary-base mr-2">1</span>. About me
              </span>
              <hr className="ml-4 w-40 mb-2" />
            </div>
            <p className="mb-4">
              After discovering my passion for web development, I couldn’t get
              enough. I made websites for friends and family, interned with a
              local business, and hired myself out as a freelancer. and I’m
              looking forward to bringing that passion for great projects.
            </p>
            <p className="mb-4">
              I primarily use the following technologies, tools and libraries:
            </p>
            <div className="flex ml-8">
              <ul className="list-disc">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>GraphQL</li>
              </ul>
              <ul className="ml-8 list-disc">
                <li>HTML &amp; CSS</li>
                <li>Node.js/Express.js</li>
                <li>React Native</li>
                <li>SQL &amp; NoSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
