import React, { useContext } from "react"
import projectsStyles from "../components/projects.module.scss"
import Project from "../components/project"
import { ThemeContext } from "./ThemeProvider"

const Projects = ({ projects }) => {
  const state = useContext(ThemeContext)

  const styleProject = {
    // marginTop: 0,
    backgroundColor: state.theme.primary,

    // width: "100%",
    // height: "60px",
    color: state.theme.text,
  }

  return (
    <section
      className={
        state.theme.type === "light"
          ? projectsStyles.section
          : projectsStyles.sectionDark
      }
      style={styleProject}
    >
      <h2 class={projectsStyles.underline} style={{ color: "#f96c85" }}>
        <span>Featured Projects</span>
      </h2>
      <div className={projectsStyles.sectionCenter}>
        {projects.edges.map((project, index) => {
          return (
            <Project key={project.node.id} index={index} {...project.node} />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
