import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Button, Input, Row, Col, Tag } from "antd"
import "./pageStyles/blog.scss"
import PostList from "../components/PostList/PostList"
import Footer from "../components/footer/Footer"
import MobileNav from "../components/navBar/MobileNav"
import DesktopNav from "../components/navBar/DesktopNav"
import SEO from "../components/seo"

const { Search } = Input

const Blog = () => {
  const blogPosts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 2
      ) {
        edges {
          node {
            frontmatter {
              date
              slug
              subtitle
              title
            }
            html
            id
            excerpt
          }
        }
      }
    }
  `)
  return (
    <div id="landingPageContainer">
      <SEO title="Web Developer blog" />
      <div id="landingHeader">
        <nav>
          <MobileNav />
          <DesktopNav />
        </nav>
        <div id="headerHero">
          {/* <h1>Title</h1> */}
          <h1>Hi, I'm Josh </h1>
          <h3>I'm here to help you become a better web developer</h3>
          <Button type="primary" id="heroButton">
            Subscribe
          </Button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ec5131"
            d="M0,96L40,117.3C80,139,160,181,240,202.7C320,224,400,224,480,208C560,192,640,160,720,133.3C800,107,880,85,960,85.3C1040,85,1120,107,1200,138.7C1280,171,1360,213,1400,234.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
      <main style={{ minHeight: "100vh" }}>
        <Row justify="center">
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            {/* <div id="projectsContainer" className="container">
              <h1>Projects to Work on</h1>
              <ul id="projectList">
                <img
                  src="https://via.placeholder.com/150"
                  className="projectImage"
                />
              </ul>
            </div> */}
            <div id="blogContainer" className="container">
              <h5>Recently Posted</h5>
              <PostList blogPosts={blogPosts.allMarkdownRemark.edges} />
              <Link to="/bloglist">
                <p id="viewAllOption">View all</p>
              </Link>
            </div>
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 4 }}></Col>
          <Col xs={{ span: 24 }} lg={{ span: 4 }}>
            {/* <p className="container">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document
            </p> */}
            <div className="container">
              <h5>Popular Categories</h5>
              <ul>
                <li>
                  <Link to="/">
                    <Tag color="magenta">React</Tag>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Tag color="red">Javascript</Tag>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Tag color="cyan">Python</Tag>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Tag color="blue">Html</Tag>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 16 }}>
            <div id="newsletterSection" className="container">
              <h5>Get Notified</h5>
              <label>
                <p>Join the Newsletter for Exclusive content </p>
              </label>
              <Search
                placeholder="Enter Email Address"
                enterButton="Subscribe"
                size="large"
                onSearch={value => console.log(value)}
              />
            </div>
          </Col>
        </Row>
      </main>
      <Footer />
    </div>
  )
}

export default Blog
