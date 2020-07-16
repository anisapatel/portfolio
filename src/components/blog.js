import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import blogStyles from "./blog.module.scss"

const BlogPage = ({
  title,
  slug,
  publishedDate,
  blogImage,
  id,
  description,
}) => {
  return (
    <Link to={`/blog/${slug}`} className={blogStyles.blog} key={id}>
      <article className={blogStyles.article}>
        <Image fluid={blogImage.fluid} className={blogStyles.blogImg} />
        <div className={blogStyles.blogCard}>
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
