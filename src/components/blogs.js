import React, { useContext } from "react"
import Blog from "../components/blog"
import blogsStyles from "../components/blogs.module.scss"
import { ThemeContext } from "./ThemeProvider"
import FadeInSection from "../components/animate"

const Blogs = ({ blogs }) => {
  const state = useContext(ThemeContext)
  const styleBlogs = {
    backgroundColor: state.theme.primary,
    color: state.theme.color,
  }
  return (
    <div style={styleBlogs}>
      <section className={blogsStyles.section}>
        <h2 className={blogsStyles.underline} style={styleBlogs}>
          <span>Latest Posts</span>
        </h2>
        <div className={(blogsStyles.sectionCenter, blogsStyles.blogsCenter)}>
          {blogs.edges.map((item, index) => {
            return (
              <FadeInSection key={item.node.id}>
                <Blog index={index} {...item.node} />
              </FadeInSection>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Blogs
