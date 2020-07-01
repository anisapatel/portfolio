import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

//import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title} Portfolio
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
