import React from "react"
import Blog from "../components/blog"
import blogsStyles from "../components/blogs.module.scss"

const blogs = ({ blogs }) => {
  return (
    <section className={blogsStyles.section}>
      <div className={(blogsStyles.sectionCenter, blogsStyles.blogsCenter)}>
        {blogs.edges.map((item, index) => {
          return <Blog key={item.node.id} index={index} {...item.node} />
        })}
      </div>
    </section>
  )
}

export default blogs
