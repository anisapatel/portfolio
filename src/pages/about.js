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
            <p>
              I'm a recently graduated full-stack software developer based in
              Yorkshire, England. I'm always learning new things and I'm
              passionate about tech. I'm currently looking for my first dev
              role, so if you think I'd be a good fit,{" "}
              <Link to="/contact" className={aboutStyles.link}>
                get in touch
              </Link>
              . Check out my{" "}
              <a
                href="https://github.com/anisapatel"
                target="_blank"
                rel="noreferrer"
                className={aboutStyles.link}
              >
                github
              </a>{" "}
              and view some of my recent{" "}
              <Link to="/projects" className={aboutStyles.link}>
                projects
              </Link>{" "}
              below.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
