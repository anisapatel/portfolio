import React from "react"
import projectsStyles from "../components/projects.module.scss"
import Project from "../components/project"

const projects = ({ projects }) => {
  return (
    <section className={projectsStyles.section}>
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

export default projects
