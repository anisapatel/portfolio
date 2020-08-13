import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

// import { ThemeContext } from "./ThemeProvider"

const Layout = props => {
  // const state = useContext(ThemeContext)
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
