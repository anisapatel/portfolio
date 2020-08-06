import React, { useState, useContext } from "react"
import contactStyles from "../components/contact.module.scss"
import { ThemeContext } from "./ThemeProvider"

const Contact = () => {
  const [formState, setFormState] = useState([
    { name: "", email: "", subject: "", message: "" },
  ])
  const [isDisabled, setDisabled] = useState(false)
  const state = useContext(ThemeContext)
  const styleContacts = {
    // marginTop: 0,
    backgroundColor: state.theme.primary,

    // width: "100%",
    // height: "60px",
    color: state.theme.text,
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = event => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => setDisabled(true))
      .catch(error => alert(error))
  }

  return (
    <div className={contactStyles.contact} style={styleContacts}>
      <section className={contactStyles.container}>
        <article
          className={
            state.theme.type === "light"
              ? contactStyles.form
              : contactStyles.formDark
          }
          // className={contactStyles.form}
        >
          <h3>Contact me</h3>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <div className={contactStyles.formFields}>
              <input type="hidden" name="bot-field" id="bot-field" />
              <input
                type="hidden"
                name="contact"
                id="contact"
                value="contact"
              />
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
            <button
              className={
                state.theme.type === "light"
                  ? contactStyles.button
                  : contactStyles.buttonDark
              }
              disabled={isDisabled}
              type="submit"
            >
              {isDisabled ? "Sent!" : "Submit"}
            </button>
          </form>
        </article>
      </section>
      <div className={contactStyles.email}>
        <p>
          Feel free to reach out if you have any questions/suggestions, want my
          CV, think we could work together, or just want to say hello! Whatever
          it is I'd love to hear from you! Use the form or email me directly at{" "}
          <a
            href="mailto:anisa_patel@live.co.uk"
            target="_blank"
            rel="noopener noreferrer nofollow"
            type="button"
            className={
              state.theme.type === "light"
                ? contactStyles.a
                : contactStyles.aDark
            }
          >
            anisa_patel@live.co.uk
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Contact
