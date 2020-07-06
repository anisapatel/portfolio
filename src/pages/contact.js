import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "../pages/contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me.</h1>
      <div className={contactStyles.social}>
        <a
          href="https://github.com/anisapatel"
          target="_blank"
          rel="noreferrer"
          className={contactStyles.faGithub}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/anisa-patel-758333123/"
          target="_blank"
          rel="noreferrer"
          className={contactStyles.faLinkedin}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://twitter.com/annzy_p"
          target="_blank"
          rel="noreferrer"
          className={contactStyles.faTwitter}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </Layout>
  )
}

export default Contact
