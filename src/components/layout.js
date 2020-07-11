import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.section}>
      <div className={layoutStyles.sectionCenter}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
