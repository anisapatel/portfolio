import React from "react"
import projectsStyles from "../components/projects.module.scss"
import Project from "../components/project"

const projects = ({ projects }) => {
  return (
    <section className={projectsStyles.section}>
      {/* <h2 className={projectsStyles.title}>Featured Projects</h2> */}
      <h2 class={projectsStyles.underline}>
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

export default projects
