import React from "react"
import { Link } from "gatsby"
import aboutStyles from "../pages/about.module.scss"

const AboutPage = () => {
  return (
    <div className={aboutStyles.container}>
      <section className={aboutStyles.section}>
        <div className={(aboutStyles.sectionCenter, aboutStyles.aboutCenter)}>
          <h2>Hi, I'm Anisa.</h2>
          <article className={aboutStyles.text}>
            <p>A Software developer based in Yorkshire, England.</p>
            <p>
              Need a developer?{" "}
              <Link to="/contact" className={aboutStyles.link}>
                Contact me
              </Link>
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
