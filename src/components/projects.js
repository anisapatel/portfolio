import React, { useContext } from "react"
import projectsStyles from "../components/projects.module.scss"
import Project from "../components/project"
import { ThemeContext } from "./ThemeProvider"
import FadeInSection from "../components/animate"

const Projects = ({ projects }) => {
  const state = useContext(ThemeContext)

  const styleProject = {
    // marginTop: 0,
    backgroundColor: state.theme.primary,
    // width: "100%",
    // height: "60px",
    color: state.theme.color,
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
      <h2 class={projectsStyles.underline} style={styleProject}>
        <span>Featured Projects</span>
      </h2>

      <div
        className={
          (projectsStyles.sectionCenter, projectsStyles.projectsCenter)
        }
      >
        {projects.edges.map((project, index) => {
          return (
            <FadeInSection>
              <Project key={project.node.id} index={index} {...project.node} />
            </FadeInSection>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
