import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"
import errorStyles from "./404.module.scss"

const NotFound = () => {
  return (
    <Layout>
      <div className={errorStyles.container}>
        <section className={errorStyles.section}>
          <div className={errorStyles.sectionCenter}>
            <h1 className={errorStyles.title}>404</h1>
            <p>Oops! The page you requested for was not found.</p>
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
