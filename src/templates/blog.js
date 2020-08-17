import React, { useContext } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
import templateStyles from "./template.module.scss"
import { ThemeContext } from "../components/ThemeProvider"
import Image from "gatsby-image"

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMMM YYYY")
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
        return <img alt={alt} src={url} className={templateStyles.img} />
      },
    },
    renderText: text =>
      text
        .replace(/\u2028/g, "")
        .split("\n")
        .flatMap((text, i) => [i > 0 && <br />, text]),
    // renderText: text =>
    //   text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
  }
  const state = useContext(ThemeContext)

  const templateStyle = {
    backgroundColor: state.theme.primary,
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
              <h2 className={templateStyles.h2}>
                {props.data.contentfulBlogPost.title}
              </h2>
              <p className={templateStyles.date}>
                {props.data.contentfulBlogPost.publishedDate}
              </p>
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
