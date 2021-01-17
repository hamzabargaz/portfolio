import React from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import cx from "classnames"

export default ({ node }) => {
  return (
    <div className="flex flex-col p-4 group box">
      <Link to={`/${node?.frontmatter?.slug}`}>
        <div className="flex flex-wrap items-center">
          <Img
            fluid={node?.frontmatter?.hero?.childImageSharp?.fluid}
            alt=""
            className="w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2 flex flex-col p-4">
            <div className="text-3xl text-secondary-base mb-2">
              {node?.frontmatter?.title}
            </div>
            <p className="mb-2 text-tertiary-base group-hover:text-white">
              {node?.frontmatter?.excerpt}
            </p>
            <div className="text-secondary-base">{`Continue -->`}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
