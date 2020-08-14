import React, { useContext } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
import templateStyles from "./template.module.scss"
import { ThemeContext } from "../components/ThemeProvider"

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM DD YYYY")
      body {
        json
      }
    }
  }
`

const BlogTemplate = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  const state = useContext(ThemeContext)

  const templateStyle = {
    // marginTop: 0,
    backgroundColor: state.theme.primary,
    // width: "100%",
    // height: "60px",
    color: state.theme.text,
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <section className={templateStyles.section} style={templateStyle}>
        <div
          className={
            (templateStyles.sectionCenter, templateStyles.templateCenter)
          }
        >
          <article className={templateStyles.article}>
            <div className={templateStyles.blogContent}>
              <h2>{props.data.contentfulBlogPost.title}</h2>
              <p>{props.data.contentfulBlogPost.publishedDate}</p>
              {documentToReactComponents(
                props.data.contentfulBlogPost.body.json,
                options
              )}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate
