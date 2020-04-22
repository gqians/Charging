// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-jsx": () => import("./../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-archives-jsx": () => import("./../src/pages/archives.jsx" /* webpackChunkName: "component---src-pages-archives-jsx" */),
  "component---src-pages-tags-jsx": () => import("./../src/pages/tags.jsx" /* webpackChunkName: "component---src-pages-tags-jsx" */),
  "component---src-templates-archives-index-jsx": () => import("./../src/templates/archives/index.jsx" /* webpackChunkName: "component---src-templates-archives-index-jsx" */),
  "component---src-templates-blog-post-index-jsx": () => import("./../src/templates/blogPost/index.jsx" /* webpackChunkName: "component---src-templates-blog-post-index-jsx" */),
  "component---src-templates-index-jsx": () => import("./../src/templates/index.jsx" /* webpackChunkName: "component---src-templates-index-jsx" */),
  "component---src-templates-tags-index-jsx": () => import("./../src/templates/tags/index.jsx" /* webpackChunkName: "component---src-templates-tags-index-jsx" */)
}

