import React, { useContext } from "react"
import { FaShareSquare, FaGithubSquare } from "react-icons/fa"
import Image from "gatsby-image"
import projectStyles from "./project.module.scss"
import { ThemeContext } from "./ThemeProvider"

const Project = ({ description, title, github, url, stack, image, index }) => {
  const state = useContext(ThemeContext)
  const styleProject = {
    // marginTop: 0,
    // backgroundColor: state.theme.primary,

    // width: "100%",
    // height: "60px",
    color: state.theme.text,
  }
  return (
    <article
      className={
        state.theme.type === "light"
          ? projectStyles.project
          : projectStyles.projectDark
      }
    >
      <Image
        fluid={image.fluid}
        className={
          state.theme.type === "light"
            ? projectStyles.projectImg
            : projectStyles.projectImgDark
        }
      />
      <div
        className={
          state.theme.type === "light"
            ? projectStyles.projectInfo
            : projectStyles.projectInfoDark
        }
      >
        {/* <span className={projectStyles.projectNumber}>0{index + 1}</span> */}
        <h3 className={projectStyles.title}>{title}</h3>
        <p className={projectStyles.projectDesc}>{description.description}</p>
        <div className={projectStyles.projectStack}>
          {stack.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className={projectStyles.projectLinks}>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className={projectStyles.links}
            style={styleProject}
          >
            <div>
              <FaGithubSquare className={projectStyles.projectIcon} />
            </div>
            <p>Source Code</p>
          </a>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={projectStyles.links}
            style={styleProject}
          >
            <div>
              <FaShareSquare className={projectStyles.projectIcon} />
            </div>
            {title === "Sprout" ? <p>Demo</p> : <p>Live Site</p>}
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
