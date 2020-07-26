import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../components/footer.module.scss"
import Social from "./social"
import { ThemeContext } from "./ThemeProvider"

const Footer = () => {
  const state = useContext(ThemeContext)
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
    <footer
      className={
        state.theme.type === "light"
          ? footerStyles.footer
          : footerStyles.footerDark
      }
    >
      <div>
        <Social />
        <h4>Made with &#10084; © 2020 - {data.site.siteMetadata.author}. </h4>
        <p>
          Built with GatsbyJS, React and GraphQL. The source code can be found
          on{" "}
          <a
            href="https://github.com/anisapatel/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Github.
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
