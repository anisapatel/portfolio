import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import blogsStyles from "./blogs.module.scss"

const BlogPage = ({ title, slug, publishedDate, blogImage, id }) => {
  return (
    <Link to={`/blog/${slug}`} className={blogsStyles.blog} key={id}>
      <article>
        <Image fluid={blogImage.fluid} className={blogsStyles.blogImg} />
        <div className={blogsStyles.blogCard}>
          <h4>{title}</h4>
          <div className={blogsStyles.blogFooter}>
            <p>{slug}</p>
            <p>{publishedDate}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogPage
