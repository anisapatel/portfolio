import React, { useContext } from "react"
import Blog from "../components/blog"
import blogsStyles from "../components/blogs.module.scss"
import { ThemeContext } from "./ThemeProvider"
import FadeInSection from "../components/animate"

const Blogs = ({ blogs }) => {
  const state = useContext(ThemeContext)
  const styleBlogs = {
    // marginTop: 0,
    backgroundColor: state.theme.primary,

    // width: "100%",
    // height: "60px",
    color: state.theme.color,
  }
  return (
    <div
      style={styleBlogs}
      // className={
      //   state.theme.type === "light"
      //     ? blogsStyles.container
      //     : blogsStyles.containerDark
      // }
    >
      <section className={blogsStyles.section}>
        <h2 class={blogsStyles.underline} style={styleBlogs}>
          <span>Latest Posts</span>
        </h2>
        <div className={(blogsStyles.sectionCenter, blogsStyles.blogsCenter)}>
          {blogs.edges.map((item, index) => {
            return (
              <FadeInSection>
                <Blog key={item.node.id} index={index} {...item.node} />
              </FadeInSection>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Blogs
