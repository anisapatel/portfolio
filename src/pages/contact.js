import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Contact from "../components/contact"
import contactStyles from "../pages/contact.module.scss"
import { ThemeContextProvider } from "../components/ThemeProvider"

const ContactPage = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Head title="Contact" />
        <section className={contactStyles.section}>
          <Contact />
        </section>
      </Layout>
    </ThemeContextProvider>
  )
}

export default ContactPage
