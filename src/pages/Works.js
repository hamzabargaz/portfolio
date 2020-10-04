import React from "react"
import { Layout } from "../components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const imgQuery = graphql`
  query {
    file(relativePath: { eq: "zyda-screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
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
        <div className="w-full flex items-center text-white">
          <div className="flex flex-col px-8 w-full">
            <div className="flex flex-wrap items-end mb-4 font-thin text-2xl">
              <span>
                <span className="text-secondary-base mr-2">3</span>. Some Things
                I've Built and worked on
              </span>
              <hr className="ml-4 w-40 mb-2" />
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full md:w-2/3 order-2 md:order-1">
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  className="w-full"
                  alt="zyda website"
                />
              </div>
              <div className="w-full md:w-1/3 text-right -ml-4 z-10  order-1 md:order-2">
                <div className="">
                  <div className="mb-2">
                    <h3 className="text-secondary-base">Featured Project</h3>
                    <h1 className="text-2xl">Zyda</h1>
                  </div>
                  <div className="mb-2 bg-secondary-base px-8 py-3 text-left text-black">
                    <p className="">
                      Zyda helps local stores sell through social media with a
                      seamless and branded online ordering experience.
                    </p>
                  </div>
                  <div className="mb-2">
                    <p className="text-secondary-base">
                      Reactjs - Graphql - Context API{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
