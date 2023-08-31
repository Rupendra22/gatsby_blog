/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `kylemathews`
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          backgroundColor: `transparent`,
          placeholder: "none"
        }
      }
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    `gatsby-plugin-netlify`,

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images-contentful",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: "gatsby-remark-table-of-contents",
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            }
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: 100,
              maintainCase: false,
              removeAccents: false
            }
          }
        ]
      }
    }

    // {
    //   resolve: "gatsby-plugin-gatsby-cloud",
    //   options: {
    //     headers: {
    //       "/*": ["X-Frame-Options: SAMEORIGIN"]
    //     }, // option to add more headers. `Link` headers are transformed by the below criteria
    //     // allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
    //     // mergeSecurityHeaders: true, // boolean to turn off the default security headers
    //     // mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
    //     mergeCachingHeaders: false // boolean to turn off the default caching headers
    //     // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
    //     // generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    //   }
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  trailingSlash: "always"
}
