import React, { useState } from "react"
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
  const [formState, setFormState] = useState([
    { name: "", email: "", subject: "", message: "" },
  ])
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const handleChange = event => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    const form = event.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => alert("success"))
      .catch(error => alert(error))
    event.preventDefault()
  }

  return (
    <Layout>
      <Head title="Contact" />
      <h1>Get in touch</h1>
      <form
        name="contact"
        method="POST"
        action="/"
        className={contactStyles.form}
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="contact" value="contact" />
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Name"
            onChange={handleChange}
            value={formState.name}
          ></input>
        </label>

        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="E-mail"
            onChange={handleChange}
            value={formState.email}
          ></input>
        </label>

        <label htmlFor="subject">
          <input
            type="text"
            name="subject"
            id="subject"
            required
            placeholder="Subject"
            onChange={handleChange}
            value={formState.subject}
          ></input>
        </label>

        <label htmlFor="message">
          <textarea
            type="text"
            name="message"
            id="message"
            rows="5"
            required
            placeholder="Message"
            onChange={handleChange}
            value={formState.message}
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
