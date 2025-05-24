/* eslint-disable */
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }: any) => {
  const { createPage } = actions

  const result = await graphql(`
    query GenerateProjectPages {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            image_list_path
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes
  const postTemplate = path.resolve('./src/templates/project-details.tsx')
  // you'll call `createPage` for each result
  posts.forEach((node: any) => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `projects/${node.frontmatter.slug}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        imageListPath: node.frontmatter.image_list_path || ' ',
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions, getConfig }: any) => {
  const config = getConfig()

  const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.toString().includes('svg'))

  if (fileLoaderRule) {
    fileLoaderRule.exclude = /\.inline\.svg$/
  }

  config.module.rules.push({
    test: /\.inline\.svg$/,
    use: ['@svgr/webpack'],
  })

  actions.replaceWebpackConfig(config)
}
