import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import blogStyles from "../pages/blog.module.scss"
import Head from "../components/head"
import Blogs from "../components/blogs"

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
      <h1>Blog</h1>
      <section className={blogStyles.section}>
        <div className={(blogStyles.sectionCenter, blogStyles.blogsCenter)}>
          {data.allContentfulBlogPost.edges.map((item, index) => {
            return <Blogs key={item.node.id} index={index} {...item.node} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default BlogsPage
