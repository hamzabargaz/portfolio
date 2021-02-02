import React, { useState } from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import { Layout } from "../../components"
import cx from "classnames"
import Card from "./card"

export default ({ data }) => {
  console.log("data : ", data)
  return (
    <Layout>
      <div className="flex flex-wrap h-screen">
        <div className="w-full flex text-white">
          <div className="flex flex-col px-8 w-full">
            <div className="flex flex-wrap items-end mb-4 font-thin text-3xl font-serif">
              <span>
                Articles to
                <span className="text-secondary-base ml-2">read</span>
              </span>
              <hr className="ml-4 w-40 mb-2 bg-white" />
            </div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card key={node.id} node={node} />
            ))}
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
            date(formatString: "DD MMMM, YYYY")
            excerpt
            keywords
            secret
            slug
            title
            hero {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
