import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/layout/bio"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import { rhythm } from "../utils/typography"
import ArticlePagination from '../components/pagination'
import config from '../utils/config'
import s from './index.module.css'


const BlogIndex = ({ data, location ,pageContext}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = pageContext.group
   //   const pageContext = data.allMarkdownRemark.pageInfo
  console.log(pageContext)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="王霸之气" />
      {/* <Bio /> */}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
            <Link style={{ boxShadow: `none` }} key={node.fields.slug} to={node.fields.slug}>
                <article className={s.article}>
                    <header>
                    <div>
                        {title}
                    </div>
                    </header>
                    <section className={s.section}>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                        }}
                    />
                    <small>{node.frontmatter.date}</small>
                    </section>
                </article>
          </Link>
        )
      })}
    <ArticlePagination pageContext={pageContext} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
      pageInfo {
        currentPage
        pageCount
        hasPreviousPage
        hasNextPage
        itemCount
        perPage
      }
    }
  }
`
