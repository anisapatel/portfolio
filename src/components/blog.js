import React, { useContext } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import blogStyles from "./blog.module.scss"
import { ThemeContext } from "./ThemeProvider"

const BlogPage = ({
  title,
  slug,
  publishedDate,
  blogImage,
  id,
  description,
}) => {
  const state = useContext(ThemeContext)
  const styleBlog = {
    backgroundColor: state.theme.primary,
    color: state.theme.text,
  }
  return (
    <Link to={`/blog/${slug}`} className={blogStyles.blog} key={id}>
      <article
        style={styleBlog}
        className={
          state.theme.type === "light"
            ? blogStyles.article
            : blogStyles.articleDark
        }
      >
        <Image fluid={blogImage.fluid} className={blogStyles.blogImg} />
        <div
          className={
            state.theme.type === "light"
              ? blogStyles.blogCard
              : blogStyles.blogCardDark
          }
        >
          <h4>{title}</h4>
          <p className={blogStyles.description}>{description.description}</p>
          <div className={blogStyles.blogFooter}>
            <p>{slug}</p>
            <p>{publishedDate}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogPage
