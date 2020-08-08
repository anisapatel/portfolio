import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import { ThemeContextProvider } from "../components/ThemeProvider"

const Layout = props => {
  return (
    // <ThemeContextProvider>
    <>
      <Header />
      {props.children}
      <Footer />
    </>
    // </ThemeContextProvider>
  )
}

export default Layout
