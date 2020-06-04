const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-jsx": hot(preferDefault(require("/home/qianh/workspace/personal/blog/gatsby-starter-blog/src/pages/404.jsx"))),
  "component---src-pages-archives-jsx": hot(preferDefault(require("/home/qianh/workspace/personal/blog/gatsby-starter-blog/src/pages/archives.jsx"))),
  "component---src-pages-tags-jsx": hot(preferDefault(require("/home/qianh/workspace/personal/blog/gatsby-starter-blog/src/pages/tags.jsx"))),
  "component---src-templates-archives-index-jsx": hot(preferDefault(require("/home/qianh/workspace/personal/blog/gatsby-starter-blog/src/templates/archives/index.jsx"))),
  "component---src-templates-blog-post-index-jsx": hot(preferDefault(require("/home/qianh/workspace/personal/blog/gatsby-starter-blog/src/templates/blogPost/index.jsx"))),
  "component---src-templates-index-jsx": hot(preferDefault(require("/home/qianh/workspace/personal/blog/gatsby-starter-blog/src/templates/index.jsx"))),
  "component---src-templates-tags-index-jsx": hot(preferDefault(require("/home/qianh/workspace/personal/blog/gatsby-starter-blog/src/templates/tags/index.jsx")))
}

