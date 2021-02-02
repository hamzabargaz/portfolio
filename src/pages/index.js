import React from "react"
import { Layout } from "../components"
import Hand from "../assets/svg/waving-hand.svg"
import { Link, graphql, withPrefix } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <Layout>
      <div className="flex flex-col text-white h-screen">
        <div className="w-full md:w-2/3 flex items-start mb-20">
          <div className="flex flex-col px-8">
            <div className="flex items-end mb-4 font-serif text-3xl">
              Hi <Hand className="w-6 mx-1" />,
              <hr className="ml-2 w-40 mb-2" />
            </div>
            <h1 className="text-5xl font-bold mb-6">I’m Hamza Bargaz</h1>
            <p className="text-tertiary-base mb-6 font-thin text-xl max-w-2xl">
              I'm a frontend developer with experience ranging from frontend
              over backend to mobile development and I have written apps with
              technologies in all of these sections.
            </p>
            <div className="">
              <a
                href="mailto:hamza.bargaz@gmail.com"
                className="text-lg px-8 py-2 text-black bg-secondary-base font-serif"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="w-full  flex items-start mt-20 md:mt-0 mx-auto px-8">
          <div className="flex flex-col">
            <div className="flex items-end  mb-4 font-serif text-3xl">
              Last <span className="text-secondary-base mx-1">Articles</span>
              <hr className="ml-2 w-40 mb-2 bg-white" />
            </div>
            <div className="pr-4">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="flex flex-col border p-6 group hover:border-secondary-base box mb-4">
                  <Link to={`/${node.frontmatter.slug}`}>
                    <div className="text-secondary-base text-2xl mb-2">
                      {node.frontmatter.title}
                    </div>
                    <p className="text-tertiary-base group-hover:text-white">
                      {node.frontmatter.excerpt}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            excerpt
            keywords
            secret
            slug
            title
          }
        }
      }
    }
  }
`
