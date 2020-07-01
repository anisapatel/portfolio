import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <h1>About me.</h1>
      <p>
        I'm Anisa, a 25 year old full stack developer living in the North of
        England. I have a cat Luna.
      </p>
      <p>
        Check out my <Link to="/contact">contact page</Link>
      </p>
    </Layout>
  )
}

export default About
