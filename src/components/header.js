import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import headerStyles from "./header.module.scss"
import Switch from "../components/switch"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)
  const activeNavItem = headerStyles.activeNavItem
  const navItem = headerStyles.navItem
  const switchBar = headerStyles.switch
  const switchSticky = headerStyles.switchSticky
  const navClassNames = isOpen ? activeNavItem : navItem
  const navBar = headerStyles.navBar
  const navBarSticky = headerStyles.navBarSticky
  const navLink = headerStyles.navLink
  const navLinkSticky = headerStyles.navLinkSticky
  const projectIcon = headerStyles.projectIcon
  const projectIconSticky = headerStyles.projectIconSticky
  const header = headerStyles.header
  const headerSticky = headerStyles.headerSticky

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleScroll = () => {
    window.scrollY > 0 ? setSticky(true) : setSticky(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <header className={isSticky ? headerSticky : header}>
      <nav className={isSticky ? navBarSticky : navBar}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.logo}>
            <Link
              to="/"
              className={isSticky ? navLinkSticky : navLink}
              className={
                isSticky ? headerStyles.title : headerStyles.titleActive
              }
            >
              {data.site.siteMetadata.title}
            </Link>
          </li>
          <li className={navClassNames}>
            <Link to="/" className={isSticky ? navLinkSticky : navLink}>
              Home
            </Link>
          </li>
          <li className={navClassNames}>
            <Link className={isSticky ? navLinkSticky : navLink} to="/blog">
              Blog
            </Link>
          </li>
          <li className={navClassNames}>
            <Link className={isSticky ? navLinkSticky : navLink} to="/projects">
              Projects
            </Link>
          </li>
          <li className={navClassNames}>
            <Link className={isSticky ? navLinkSticky : navLink} to="/contact">
              Contact
            </Link>
          </li>

          <li
            role="presentation"
            className={headerStyles.toggle}
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className={isSticky ? projectIconSticky : projectIcon} />
            ) : (
              <FaBars className={isSticky ? projectIconSticky : projectIcon} />
            )}
          </li>
        </ul>
      </nav>
      <div className={headerStyles.switch}>
        <Switch />
      </div>
    </header>
  )
}

export default Header
