import React from "react"
import "./project.scss"
import Img from "gatsby-image"

const Project = ({
  title,
  img,
  tech,
  description,
  codeLink,
  liveLink,
  side,
}) => {
  return (
    <div
      className="projectContainer"
      data-sal="slide-down"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <div
        className="leftSide"
        className={side === "right" ? "leftSideOrder" : "rightSideOrder"}
      >
        <a href={liveLink} target="_blank">
          <Img fluid={img} />
        </a>
      </div>
      <div
        className="rightSide"
        className={side === "right" ? "rightSideOrder" : ""}
      >
        <h2>{title}</h2>
        <h5>{tech}</h5>
        <p>{description}</p>
        <div className="projectButtons">
          <a href={codeLink} target="_blank">
            <button className="leftButton">Code</button>
          </a>
          <a href={liveLink} target="_blank">
            <button className="rightButton">Live</button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Project
