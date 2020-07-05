import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../components/footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

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
      <p>© 2020 - A GatsbyJS site by {data.site.siteMetadata.author}</p>
    </div>
  )
}

export default Footer
