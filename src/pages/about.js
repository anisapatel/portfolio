import React, { useContext } from "react"
import { Link } from "gatsby"
import aboutStyles from "../pages/about.module.scss"
import { ThemeContext } from "../components/ThemeProvider"
import FadeInSection from "../components/animate"
import Type from "../components/type"

const AboutPage = () => {
  const state = useContext(ThemeContext)

  const about = {
    color: state.theme.text,
  }
  return (
    <div
      className={
        state.theme.type === "light"
          ? aboutStyles.container
          : aboutStyles.containerDark
      }
      style={about}
    >
      <FadeInSection>
        <section className={aboutStyles.section}>
          <div className={(aboutStyles.sectionCenter, aboutStyles.aboutCenter)}>
            <h2 className={aboutStyles.h2} style={about}>
              <Type textToType=" Hi! I'm Anisa" delay={150} loop={false} />
            </h2>
            <article className={aboutStyles.text}>
              <p>
                I'm a recently graduated full-stack software developer based in
                Yorkshire, England. I'm always learning new things and I'm
                passionate about tech for good. I'm currently looking for my
                first dev role, so if you think I'd be a good fit,{" "}
                <Link to="/contact" className={aboutStyles.link} style={about}>
                  get in touch
                </Link>
                . Check out my{" "}
                <a
                  href="https://github.com/anisapatel"
                  target="_blank"
                  rel="noreferrer"
                  className={aboutStyles.link}
                  style={about}
                >
                  github
                </a>{" "}
                and view some of my recent{" "}
                <Link to="/projects" className={aboutStyles.link} style={about}>
                  projects
                </Link>{" "}
                below.
              </p>
            </article>
          </div>
        </section>
      </FadeInSection>
    </div>
  )
}

export default AboutPage
