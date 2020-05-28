const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blogPost/index.jsx`)
  const result = await graphql(
    `
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              tags
              date(
                formatString: "YYYY年MM月DD日"
                locale: "zh-cn"
              )              
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges
  createPaginatedPages({
    edges: posts,
    createPage: createPage,
    pageTemplate: 'src/templates/index.jsx',
    pageLength: 3, // This is optional and defaults to 10 if not used
    pathPrefix: '', // This is optional and defaults to an empty string if not used
    context: {}, // This is optional and defaults to an empty object if not used
  })
   // Tag pages:
   const tagTemplate = path.resolve('./src/templates/tags/index.jsx')
  //  let tags = []
  //  // Iterate through each post, putting all found tags into `tags`
  //  _.each(posts, edge => {
  //    if (_.get(edge, "node.frontmatter.tags")) {
  //     edge.node.frontmatter.tags.split(',').forEach((item)=>{
  //       tags.push(item)
  //     })
  //    }
  //  })
  //  // Eliminate duplicate tags
  //  tags = _.uniq(tags)
  //  console.log(tags)
  //   // Make tag pages
  //   tags.forEach(tag => {
  //     console.log(_.kebabCase(tag))
  //     createPage({
  //       path: `/tags/${_.kebabCase(tag)}/`,
  //       component: tagTemplate,
  //       context: {
  //         tag:`${tag}`
  //       },
  //     })
  //   })

    const archives = []
    try {
      const getDate = d => d.substr(0, d.indexOf("月") +1)
      const obj = _.groupBy(posts, (v) => getDate(v.node.frontmatter.date))
      _.mapKeys(obj, (v,k) => archives.push({ month: k, length: v.length }))
    } catch (e) {
      console.log('has error*')
    }

    archives.forEach(({ month }) => {
      createPage({
        path: `/archives/${_.kebabCase(month.replace(/[\u4e00-\u9fa5]/g, '-'))}/`,
        component: path.resolve(`./src/templates/archives/index.jsx`),
        context: {
          month,
        },
      })
    })






  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules = [
    // Omit the default rule where test === '\.jsx?$'
    ...config.module.rules.filter(
      rule => String(rule.test) !== String(/\.jsx?$/)
    ),

    // Recreate it with custom exclude filter
    {
      // Called without any arguments, `loaders.js()` will return an
      // object like:
      // {
      //   options: undefined,
      //   loader: '/path/to/node_modules/gatsby/dist/utils/babel-loader.js',
      // }
      // Unless you're replacing Babel with a different transpiler, you probably
      // want this so that Gatsby will apply its required Babel
      // presets/plugins.  This will also merge in your configuration from
      // `babel.config.js`.
      ...loaders.js(),

      test: /\.jsx?$/,

      // Exclude all node_modules from transpilation, except for 'swiper' and 'dom7'
      exclude: modulePath =>
        /node_modules/.test(modulePath) &&
        !/node_modules\/(swiper|dom7)/.test(modulePath),
    },
  ]

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config)
}