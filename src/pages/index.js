import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../components/Project/Project"
import "./index.scss"
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      landing_image: file(relativePath: { eq: "landing_image.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      macros: file(relativePath: { eq: "macros.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nerd_store: file(relativePath: { eq: "nerd_store.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      phone_lab: file(relativePath: { eq: "phone_lab.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contacts: file(relativePath: { eq: "contacts.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log("test", data)
  return (
    <Layout>
      <SEO title="Josh McDaniel" />
      {/* <BackgroundImage fluid={data.allFile.edges[3].node.childImageSharp.fluid}> */}
      <div
        id="landingPage"
        style={{
          backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${data.landing_image.childImageSharp.fluid.src})`,
        }}
      >
        <div id="landingContent">
          <div id="headlineText">
            <h1>Hi,</h1>
            <h1>
              I'm <span style={{ color: "#ff4b36" }}>Josh</span>
            </h1>
            <h3>Full-Stack Developer</h3>
            <a
              href="https://drive.google.com/file/d/11uWDnXEIVM3N3JeBbtLdgKeDbF-ZlQ9z/view"
              target="_blank"
            >
              <button type="submit">Resume</button>
            </a>
          </div>
          <ul id="bottomSocialBar">
            <li className="socialItem">
              <a href="mailto:mcdanije22@gmail.com?Subject=Hello%20again">
                <button
                  type="submit"
                  style={{
                    borderRadius: "2.5rem",
                    width: "2.5rem",
                    height: "2.5rem",
                    lineHeight: "2.3rem",
                    backgroundColor: "transparent",
                    color: "white",
                    textAlign: "center",
                    border: "1px solid white",
                    marginLeft: "0",
                  }}
                >
                  <MailOutlined
                    style={{
                      textAlign: "center",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  />
                </button>
              </a>
            </li>
            <li className="socialItem">
              <a href="https://github.com/mcdanije22" target="_blank">
                <button
                  type="submit"
                  style={{
                    borderRadius: "2.5rem",
                    width: "2.5rem",
                    height: "2.5rem",
                    lineHeight: "2.3rem",
                    backgroundColor: "transparent",
                    color: "white",
                    textAlign: "center",
                    border: "1px solid white",
                  }}
                >
                  <GithubOutlined
                    style={{
                      textAlign: "center",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  />
                </button>
              </a>
            </li>
            <li className="socialItem">
              <a href="https://www.linkedin.com/in/mcdanije/" target="_blank">
                <button
                  type="submit"
                  style={{
                    borderRadius: "2.5rem",
                    width: "2.5rem",
                    height: "2.5rem",
                    lineHeight: "2.3rem",
                    backgroundColor: "transparent",
                    color: "white",
                    textAlign: "center",
                    border: "1px solid white",
                  }}
                >
                  <LinkedinOutlined
                    style={{
                      textAlign: "center",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </BackgroundImage> */}
      <div id="projectsContainer">
        <div id="projectHeader">
          <h1>Projects</h1>
          <hr />
        </div>
        <div id="projectList">
          <Project
            title="Macros"
            img={data.macros.childImageSharp.fluid}
            tech="HTML | CSS | TypeScript | Next js/ React js | Context API | Node js | MongoDB"
            description="A web application that lets users create, find, and share macro-friendly meals with friends. Creating a food post lets a user upload an image as well as the ability to search a food database for ingredients to easily attach nutrition values to the post. Use email: test@gmail.com and password: 12345678 as a test account. Mobile-first design patterns."
            codeLink="https://github.com/mcdanije22/macros"
            liveLink="https://macros-social.herokuapp.com/"
            side="left"
          />
          <Project
            title="The Nerd Store"
            img={data.nerd_store.childImageSharp.fluid}
            tech="HTML | CSS/SASS | Javascript | React js | Gatsby Js | GraphQL | Headless CMS"
            description="A web application that was created to be highly responsive, fast and optimized for SEO using Gatsby js. This was utilized to increase the traffic of a local gaming shop. Created using a headless cms, Contentful, for easy event editing and focusing on quick user accessibility. Provided users with access to shop event info, twitter announcements, photos, and contact/message abilities. Mobile-first design patterns."
            codeLink="https://github.com/mcdanije22/nerd_store"
            liveLink="https://relaxed-dijkstra-2f24bd.netlify.com/"
            side="right"
          />
          <Project
            title="Phonelab"
            img={data.phone_lab.childImageSharp.fluid}
            tech="HTML | CSS/SASS | Javascript | React js/ Redux | Node js/ Express js | PostgreSQL"
            description="A web application that lets customers shop and purchase smartphone and smartphone accessories. Customers will create accounts, manage addresses and payment options, edit their shopping carts, complete orders and manage their account. Use email:test and password: abc as a test account. Mobile-first design patterns."
            codeLink="https://github.com/mcdanije22/ecommerce_phones"
            liveLink="https://ecommerce-phonelab.herokuapp.com/"
            side="left"
          />
          <Project
            title="Contacts"
            img={data.contacts.childImageSharp.fluid}
            tech="HTML | CSS/SASS | Javascript | React | localstorage"
            description="A web application that lets users create, edit and delete contacts from their contact list. The contact list is carried from session to session after reloads utilizing user's local storage. Users can star their favorite contacts and quickly search for specific contacts. Mobile-first design patterns."
            codeLink="https://github.com/mcdanije22/new_contact_app'"
            liveLink="https://contact-application-new.herokuapp.com/"
            side="right"
          />
        </div>
      </div>
      <div
        id="about"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="900"
      >
        <h1>About me</h1>
        <hr />
        <h3>Josh McDaniel</h3>
        <p>
          I am a Full-Stack Developer based out of New York. I have a passion
          for using web technologies to produce creative solutions to web
          problems. I enjoy learning new technologies by building projects to
          expand my skills. I am always looking for new opportunities to further
          develop my skill set.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
