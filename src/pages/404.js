import React, { useContext } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"
import errorStyles from "./404.module.scss"
import { ThemeContext } from "../components/ThemeProvider"

const NotFound = () => {
  const state = useContext(ThemeContext)

  const style404 = {
    // marginTop: 0,
    backgroundColor: state.theme.primary,
    // width: "100%",
    // height: "60px",
    color: state.theme.color,
  }
  return (
    <Layout>
      <div className={errorStyles.container} style={style404}>
        <section className={errorStyles.section}>
          <div className={errorStyles.sectionCenter}>
            <h1 className={errorStyles.title}>404</h1>
            <p className={errorStyles.text}>
              Oops! The page you requested for was not found.
            </p>
            <button>
              <Link to="/" className={errorStyles.link}>
                Home
              </Link>
            </button>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NotFound
