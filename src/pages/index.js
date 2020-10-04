import React from "react"
import { Layout } from "../components"
import Hand from "../assets/svg/waving-hand.svg"
import { Link, graphql, useStaticQuery, withPrefix } from "gatsby"
import Img from "gatsby-image"

const imgQuery = graphql`
  query {
    file(relativePath: { eq: "coding-pattern.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          src
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(imgQuery)
  return (
    <Layout>
      <div className="flex flex-wrap h-screen">
        <div className="w-full md:w-1/2 flex items-center text-white">
          <div className="flex flex-col px-8">
            <div className="flex items-end">
              Hi <Hand className="w-6 mx-1" />,
              <hr className="ml-4 w-40 mb-2" />
            </div>
            <h1 className="text-5xl font-bold">I’m Hamza Bargaz </h1>
            <h2 className="text-4xl font-light">Frontend Developer</h2>
            <p className="text-tertiary-base my-6">
              I'm a frontend developer with experience ranging from frontend
              over backend to mobile development and I have written apps with
              technologies in all of these sections.
            </p>
            <div className="">
              <a
                href="mailto:hamza.bargaz@gmail.com"
                className="text-sm px-8 py-2 text-black bg-secondary-base"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 bg-secondary-base"
          style={{
            backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,
            backgroundSize: "70%",
          }}
        ></div>
      </div>
    </Layout>
  )
}
