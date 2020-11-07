import React from "react"
import { Link } from "gatsby"
import "./PostList.scss"

const PostList = ({ blogPosts }) => {
  return (
    <div id="postListContainer">
      <ul id="posts">
        {blogPosts.map((post, i) => {
          console.log(post)
          return (
            <li className="post" key={i}>
              <h1>{post.node.frontmatter.title}</h1>
              <h2>{post.node.frontmatter.subtitle}</h2>
              <p>{post.node.excerpt}...</p>
              <Link to={`${post.node.frontmatter.slug}`}>Read more</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default PostList
