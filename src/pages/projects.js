import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Project from "../components/project"
import projectsStyles from "../pages/projects.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects {
        edges {
          node {
            title
            id
            description {
              description
            }
            github
            url
            stack
            image {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      <section className={projectsStyles.section}>
        <div className={projectsStyles.sectionCenter}>
          {data.allContentfulProjects.edges.map((project, index) => {
            return (
              <Project key={project.node.id} index={index} {...project.node} />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Projects