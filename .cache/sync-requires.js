const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-jsx": hot(preferDefault(require("/home/qianh/workspace/personal/blog/gatsby-starter-blog/src/pages/404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/qianh/workspace/personal/blog/gatsby-starter-blog/src/pages/index.jsx"))),
  "component---src-templates-blog-post-index-jsx": hot(preferDefault(require("/home/qianh/workspace/personal/blog/gatsby-starter-blog/src/templates/blogPost/index.jsx")))
}

