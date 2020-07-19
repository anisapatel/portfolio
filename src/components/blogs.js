import React from "react"
import Blog from "../components/blog"
import blogsStyles from "../components/blogs.module.scss"

const blogs = ({ blogs }) => {
  return (
    <div className={blogsStyles.container}>
      <section className={blogsStyles.section}>
        {/* <h2 className={blogsStyles.title}>Latest Posts</h2> */}
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

export default blogs
