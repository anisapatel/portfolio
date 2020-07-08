import React from "react"
import { FaShareSquare, FaGithubSquare } from "react-icons/fa"
import Image from "gatsby-image"
import projectStyles from "./project.module.scss"

const Project = ({ description, title, github, url, stack, image, index }) => {
  return (
    <article className={projectStyles.project}>
      <Image fluid={image.fluid} className={projectStyles.projectImg} />
      <div className={projectStyles.projectInfo}>
        <span className={projectStyles.projectNumber}>0{index + 1}</span>
        <h3>{title}</h3>
        <p className={projectStyles.projectDesc}>{description.description}</p>
        <div className={projectStyles.projectStack}>
          {stack.map((item, index) => {
            return <span key={index}>{` ${item} `}</span>
          })}
        </div>
        <div className={projectStyles.projectLinks}>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className={projectStyles.projectIcon} />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <FaShareSquare className={projectStyles.projectIcon} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
