/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
// const blogPost = path.resolve(`./src/templates/blog-post.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {

  
  const {createRedirect} = actions 
  createRedirect({  fromPath: `/temp/`,
  toPath: `/`,
  isPermanent:true,
  force:true,
  statusCode:410

  });
 
}
module.exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage,createRedirect } = actions
  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split("/")[1]
    page.matchPath = `/${langCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
    createRedirect({
      fromPath: `page`,
      toPath:`page`,
      statusCode: 404,
      conditions: {
        language: [`fr`],
      },
    });
  }
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }

//     type Author {
//       name: String
//       summary: String
//     }

//     type Social {
//       twitter: String
//     }

//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }

//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }

//     type Fields {
//       slug: String
//     }
//   `)
// }
