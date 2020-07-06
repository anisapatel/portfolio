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
  const handleSubmit = event => {
    event.preventDefault()
  }
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Get in touch</h1>
      <form
        name="contact"
        method="POST"
        className={contactStyles.form}
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Name"
          ></input>
        </label>

        <label for="email">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="E-mail"
          ></input>
        </label>

        <label for="subject">
          <input
            type="text"
            name="subject"
            id="subject"
            required
            placeholder="Subject"
          ></input>
        </label>

        <label for="message">
          <textarea
            type="text"
            name="message"
            id="message"
            rows="5"
            required
            placeholder="Message"
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>

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
