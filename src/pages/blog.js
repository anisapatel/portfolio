import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "../pages/blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  // tagged template literal so you can useStaticQuery to query the graphql api
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM DD YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((item, index) => {
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${item.node.slug}`}>
                <h2>{item.node.title}</h2>
                <p>{item.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
