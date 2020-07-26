import React, { useContext } from "react"
import { Link } from "gatsby"
import aboutStyles from "../pages/about.module.scss"
import { ThemeContext } from "../components/ThemeProvider"
import Switch from "../components/switch"

const AboutPage = () => {
  const state = useContext(ThemeContext)

  const about = {
    // marginTop: 0,
    // backgroundColor: state.theme.primary,
    // width: "100%",
    // height: "60px",
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
      <section className={aboutStyles.section}>
        <div className={(aboutStyles.sectionCenter, aboutStyles.aboutCenter)}>
          <h2 className={aboutStyles.h2} style={about}>
            Hi! I'm Anisa
          </h2>
          <article className={aboutStyles.text}>
            <p>
              I'm a recently graduated full-stack software developer based in
              Yorkshire, England. I'm always learning new things and I'm
              passionate about tech. I'm currently looking for my first dev
              role, so if you think I'd be a good fit,{" "}
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
    </div>
  )
}

export default AboutPage
