import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import blogStyles from "../pages/blog.module.scss"
import Head from "../components/head"
import Blogs from "../components/blogs"
import { ThemeContextProvider } from "../components/ThemeProvider"

const BlogsPage = () => {
  // tagged template literal so you can useStaticQuery to query the graphql api
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            id
            slug
            description {
              description
            }
            publishedDate(formatString: "MMMM DD YYYY")
            blogImage {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <section className={blogStyles.section}>
        <Blogs blogs={data.allContentfulBlogPost} />
      </section>
    </Layout>
  )
}

export default BlogsPage
