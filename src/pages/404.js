import React, { useContext } from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import errorStyles from "./404.module.scss"
import { ThemeContext } from "../components/ThemeProvider"

const NotFound = () => {
  const state = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset {
        svg {
          content
          dataURI
          absolutePath #
          relativePath #
        }
        file {
          contentType
          url
          fileName
          details {
            image {
              width
              height
            }
          }
        }
        fluid {
          src
        }
      }
    }
  `)
  // if (data.contentfulAsset.file.contentType === "image/svg+xml") {
  //   if (data.contentfulAsset.svg && data.contentfulAsset.svg.content) {
  //     // Inlined SVGs
  //     return (
  //
  //     )
  //   }

  //   // SVGs that can/should not be inlined
  //   // return <img src={data.contentfulAsset.file.url} />
  // }

  const style404 = {
    // marginTop: 0,
    backgroundColor: state.theme.primary,
    // width: "100%",
    // height: "60px",
    color: state.theme.color,
  }
  return (
    <Layout>
      <div className={errorStyles.container} style={style404}>
        <section className={errorStyles.section}>
          <div className={errorStyles.sectionCenter}>
            <img
              src={data.contentfulAsset.file.url}
              alt={`woman walking through the park`}
              className={errorStyles.image}
            />
            {/* <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulAsset.svg.content,
              }}
            /> */}
            <h1 className={errorStyles.title}>404</h1>

            <p className={errorStyles.text}>
              Oops! The page you requested for was not found.
            </p>
            <button>
              <Link to="/" className={errorStyles.link}>
                Home
              </Link>
            </button>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NotFound
