import React, { useContext } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Projects from "../components/projects"
import projectsStyles from "../pages/projects.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeContextProvider } from "../components/ThemeProvider"

const ProjectsPage = () => {
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
    // <ThemeContextProvider>
    <Layout>
      <Head title="Projects" />
      <section className={projectsStyles.section}>
        <Projects projects={data.allContentfulProjects} />
      </section>
    </Layout>
    // </ThemeContextProvider>
  )
}

export default ProjectsPage
