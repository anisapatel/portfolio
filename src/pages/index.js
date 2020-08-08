import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "../pages/index.module.scss"
import Projects from "../components/projects"
import Blogs from "../components/blogs"
import Contact from "../components/contact"
// import Projects from "../pages/projects"
// import Blogs from "../pages/blog"
// import Contact from "../pages/contact"
import { graphql, useStaticQuery } from "gatsby"
import About from "../pages/about"
import { ThemeContextProvider } from "../components/ThemeProvider"
import Switch from "../components/switch"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects {
        edges {
          node {
            title
            id
            description {
              description
            }
            github
            url
            stack
            image {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            id
            slug
            publishedDate(formatString: "MMMM DD YYYY")
            description {
              description
            }
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
      <Head title="Home" />
      <About />
      <Projects projects={data.allContentfulProjects} />
      <Blogs blogs={data.allContentfulBlogPost} />
      <Contact />
    </Layout>
  )
}

export default IndexPage
