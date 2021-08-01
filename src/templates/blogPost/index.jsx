import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../../components/layout/bio"
import Layout from "../../components/layout"
import SEO from "../../components/layout/seo"
import { rhythm, scale } from "../../utils/typography"
import s from './style.module.css'
import { ReactCusdis } from 'react-cusdis'
const BlogPostTemplate = ({ data, pageContext, location }) => {
	console.log(pageContext);
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className={s.article}>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
            className={s.title}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
            className={s.time}
          >
            发布于{post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
          className={s.hr}
        />
        <footer>
          {/* <Bio /> */}
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`
          }}
          className={s.ul}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
			<div>
				{/* <ReactCusdis
					attrs={{
						host: 'https://cusdis.com',
						appId: 'a0af37f6-dfbd-4cdc-8432-edb3efa7b324',
						pageId: data.id,
						pageTitle: data.markdownRemark.frontmatter.title,
						// pageUrl: pageContext.slug
					}}
				/> */}
			</div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
