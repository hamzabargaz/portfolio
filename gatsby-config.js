// const {
//   NODE_ENV,
//   URL: NETLIFY_SITE_URL = "https://www.exindeco.com/",
//   DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
//   CONTEXT: NETLIFY_ENV = NODE_ENV,
// } = process.env

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Hamza Bargaz`,
    description: `Hamza Bargaz - Developer.`,
    author: `hamza-bargaz`,
    social: [
      {
        name: "facebook",
        url: "https://www.facebook.com/hamza.bargaz/",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/hamza.bargaz/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hamza Bargaz - Developer`,
        short_name: `Hamza-Bargaz`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/developer.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-postcss`,
    // `gatsby-plugin-sitemap`,
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: "",
    //     sitemap: "https:///sitemap.xml",
    //     env: {
    //       development: {
    //         policy: [{ userAgent: "*", disallow: ["/"] }],
    //       },
    //       production: {
    //         policy: [{ userAgent: "*", allow: "/" }],
    //       },
    //     },
    //   },
    // },
    `gatsby-plugin-netlify`,
    "gatsby-plugin-offline",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
