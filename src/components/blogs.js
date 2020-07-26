import React, { useContext } from "react"
import Blog from "../components/blog"
import blogsStyles from "../components/blogs.module.scss"
import { ThemeContext } from "./ThemeProvider"

const Blogs = ({ blogs }) => {
  const state = useContext(ThemeContext)
  return (
    <div
      className={
        state.theme.type === "light"
          ? blogsStyles.container
          : blogsStyles.containerDark
      }
    >
      <section className={blogsStyles.section}>
        <h2 class={blogsStyles.underline}>
          <span>Latest Posts</span>
        </h2>
        <div className={(blogsStyles.sectionCenter, blogsStyles.blogsCenter)}>
          {blogs.edges.map((item, index) => {
            return <Blog key={item.node.id} index={index} {...item.node} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Blogs
