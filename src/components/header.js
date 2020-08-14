import React, { useState, useEffect, useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import headerStyles from "./header.module.scss"
import Switch from "../components/switch"
import { ThemeContext } from "./ThemeProvider"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)
  const activeNavItem = headerStyles.activeNavItem
  const navItem = headerStyles.navItem
  const navClassNames = isOpen ? activeNavItem : navItem
  const navBar = headerStyles.navBar
  const navBarSticky = headerStyles.navBarSticky
  const navLink = headerStyles.navLink
  const navLinkSticky = headerStyles.navLinkSticky
  const projectIcon = headerStyles.projectIcon
  const projectIconSticky = headerStyles.projectIconSticky
  const header = headerStyles.header
  const headerSticky = headerStyles.headerSticky
  const headerDark = headerStyles.headerDark
  const headerStickyDark = headerStyles.headerStickyDark
  const state = useContext(ThemeContext)

  const styleHeader = {
    backgroundColor: state.theme.primary,
  }

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
    <header
      style={styleHeader}
      className={
        state.theme.type === "light"
          ? isSticky
            ? headerSticky
            : header
          : isSticky
          ? headerStickyDark
          : headerDark
      }
    >
      <nav className={isSticky ? navBarSticky : navBar}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.logo}>
            <Link
              to="/"
              className={
                state.theme.type === "light"
                  ? isSticky
                    ? (navLinkSticky, headerStyles.title)
                    : (navLink, headerStyles.titleActive)
                  : isSticky
                  ? (headerStyles.navLinkStickyDark, headerStyles.titleDark)
                  : (headerStyles.navLinkDark, headerStyles.titleActiveDark)
              }
            >
              {data.site.siteMetadata.title}
            </Link>
          </li>
          <li className={navClassNames}>
            <Link
              to="/"
              activeStyle={{
                textDecoration: "underline",
              }}
              className={
                state.theme.type === "light"
                  ? isSticky
                    ? navLinkSticky
                    : navLink
                  : isSticky
                  ? headerStyles.navLinkStickyDark
                  : headerStyles.navLinkDark
              }
            >
              Home
            </Link>
          </li>
          <li className={navClassNames}>
            <Link
              activeStyle={{
                textDecoration: "underline",
              }}
              className={
                state.theme.type === "light"
                  ? isSticky
                    ? navLinkSticky
                    : navLink
                  : isSticky
                  ? headerStyles.navLinkStickyDark
                  : headerStyles.navLinkDark
              }
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className={navClassNames}>
            <Link
              activeStyle={{
                textDecoration: "underline",
              }}
              className={
                state.theme.type === "light"
                  ? isSticky
                    ? navLinkSticky
                    : navLink
                  : isSticky
                  ? headerStyles.navLinkStickyDark
                  : headerStyles.navLinkDark
              }
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li className={navClassNames}>
            <Link
              activeStyle={{
                textDecoration: "underline",
              }}
              className={
                state.theme.type === "light"
                  ? isSticky
                    ? navLinkSticky
                    : navLink
                  : isSticky
                  ? headerStyles.navLinkStickyDark
                  : headerStyles.navLinkDark
              }
              to="/contact"
            >
              Contact
            </Link>
          </li>

          <li
            role="presentation"
            className={headerStyles.toggle}
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes
                className={
                  state.theme.type === "light"
                    ? isSticky
                      ? projectIconSticky
                      : projectIcon
                    : isSticky
                    ? headerStyles.projectIconStickyDark
                    : headerStyles.projectIconDark
                }
              />
            ) : (
              <FaBars
                className={
                  state.theme.type === "light"
                    ? isSticky
                      ? projectIconSticky
                      : projectIcon
                    : isSticky
                    ? headerStyles.projectIconStickyDark
                    : headerStyles.projectIconDark
                }
              />
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
