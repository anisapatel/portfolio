import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../components/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className={footerStyles.footer}>
      <p>Made with Gatsby.js. {data.site.siteMetadata.author} © 2020</p>
    </div>
  )
}

export default Footer
