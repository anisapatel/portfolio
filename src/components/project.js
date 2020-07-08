import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons"
import Image from "gatsby-image"

const Project = ({ description, title, github, url, stack, image, index }) => {
  console.log(image, "<---")
  return (
    <article className="project">
      <Image fluid={image.fluid} className="project-img" />
    </article>
  )
}

export default Project
