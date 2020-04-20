// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-jsx": () => import("./../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-index-jsx": () => import("./../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-templates-blog-post-index-jsx": () => import("./../src/templates/blogPost/index.jsx" /* webpackChunkName: "component---src-templates-blog-post-index-jsx" */)
}

