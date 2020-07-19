import React, { useState } from "react"
import Layout from "./layout"
import Head from "./head"
import contactStyles from "../components/contact.module.scss"

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
    <>
      <section className={contactStyles.container}>
        <article className={contactStyles.form}>
          <h3>Get in touch</h3>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <div className={contactStyles.formFields}>
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
            </div>
            <button type="submit">Submit</button>
          </form>
        </article>
      </section>
    </>
  )
}

export default Contact