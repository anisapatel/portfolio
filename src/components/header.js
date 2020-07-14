import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"

//import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const activeNavItem = headerStyles.activeNavItem
  const navItem = headerStyles.navItem
  const navClassNames = isOpen ? activeNavItem : navItem
  console.log(isOpen, "<--isOpen", navClassNames, "<--navClassNames")

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
    <nav className={headerStyles.navBar}>
      <ul className={headerStyles.navList}>
        <li className={headerStyles.logo}>
          <Link to="/" className={headerStyles.navLink}>
            {data.site.siteMetadata.title}
          </Link>
        </li>
        <li className={navClassNames}>
          <Link to="/" className={headerStyles.navLink}>
            Home
          </Link>
        </li>
        <li className={navClassNames}>
          <Link className={headerStyles.navLink} to="/blog">
            Blog
          </Link>
        </li>
        <li className={navClassNames}>
          <Link className={headerStyles.navLink} to="/projects">
            Projects
          </Link>
        </li>
        <li className={navClassNames}>
          <Link className={headerStyles.navLink} to="/contact">
            Contact
          </Link>
        </li>
        <li
          role="presentation"
          className={headerStyles.toggle}
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className={headerStyles.projectIcon} />
          ) : (
            <FaBars className={headerStyles.projectIcon} />
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Header
