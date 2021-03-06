import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../components/Project/Project"
import "./pageStyles/index.scss"
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { Link } from "gatsby"

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
      plan_code: file(relativePath: { eq: "plan_code.png" }) {
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
      turtle_leaf: file(relativePath: { eq: "turtle_leaf.png" }) {
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
    <>
      <SEO title="Josh McDaniel" />
      {/* <Layout>
      <SEO title="Josh McDaniel" /> */}
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
            <div id="leftSideHero">
              <h1>Hi,</h1>
              <h1>
                I'm <span style={{ color: "#ff4b36" }}>Josh</span>
              </h1>
              <h3>Full-Stack Developer</h3>
              <a
                href="https://docs.google.com/document/d/152CQpyXqk7SMzE0S33KPApynDclfotqY73EGo7NuCFU/edit?usp=sharing"
                target="_blank"
              >
                <button type="submit" style={{ cursor: "pointer" }}>
                  Resume
                </button>
              </a>
            </div>
            <div id="rightSideHero" style={{ display: "none" }}>
              <h3>Blog</h3>
              <Link to="/blog">
                <ArrowRightOutlined />
              </Link>
            </div>
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
                      cursor: "pointer",
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
                      cursor: "pointer",
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
                      cursor: "pointer",
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
            title="Plan Code"
            img={data.plan_code.childImageSharp.fluid}
            tech="HTML | Sass | TypeScript | Next js/ React js | Context API | Node js | MongoDB"
            description="An all-in-one solution that lets users efficiently plan their next code project. This application helps users fully plan out specific goals for what to accomplish by creating: feature wishlist, saving sites and images that inspire the project and, the ability to save blocks of code that will be helpful for later.  Use email: john.smith@gmail.com and password: abc as a test account or the live demo button. Mobile-first design patterns. Ask for the private repo for more details!"
            codeLink="https://project-planning-app.vercel.app/"
            liveLink="https://project-planning-app.vercel.app/"
            side="left"
            isPrivate={true}
          />
          <Project
            title="Macros"
            img={data.macros.childImageSharp.fluid}
            tech="HTML | CSS | TypeScript | Next js/ React js | Context API | Node js | MongoDB"
            description="A web application that lets users create, find, and share macro-friendly meals with friends. Creating a food post lets a user upload an image as well as the ability to search a food database for ingredients to easily attach nutrition values to the post. Use email: test@gmail.com and password: 12345678 as a test account. Mobile-first design patterns."
            codeLink="https://github.com/mcdanije22/macros"
            liveLink="https://macros-social.herokuapp.com/"
            side="right"
            isPrivate={false}
          />
          <Project
            title="Turtle Leaf Cafe"
            img={data.turtle_leaf.childImageSharp.fluid}
            tech="HTML | CSS/SASS | Javascript | React js | Gatsby Js | GraphQL | Markdown"
            description="A complete re-build of a website for a local cafe that was previously using Wix. Rebuilt using Gatsby js to greatly increase performance, speed and, SEO. Its purpose was to generate new web traffic for the cafe and create a much better user experience with a more modern design than previously. Ability to provided users with up to date news info and a look into the cafe. Mobile-first design patterns to provide the best views on any device size. "
            codeLink="https://github.com/mcdanije22/turtle_leaf"
            liveLink="https://cocky-chandrasekhar-6305e3.netlify.app/"
            side="left"
            isPrivate={false}
          />
          <Project
            title="The Nerd Store"
            img={data.nerd_store.childImageSharp.fluid}
            tech="HTML | CSS/SASS | Javascript | React js | Gatsby Js | GraphQL | Headless CMS"
            description="A web application that was created to be highly responsive, fast and, optimized for SEO using Gatsby js. This was utilized to increase the traffic of a local gaming shop. Created using a headless cms, Contentful, for easy event editing and focusing on quick user accessibility. Provided users with access to shop event info, twitter announcements, photos, and contact/message abilities. Mobile-first design patterns."
            codeLink="https://github.com/mcdanije22/nerd_store"
            liveLink="https://relaxed-dijkstra-2f24bd.netlify.com/"
            side="right"
            isPrivate={false}
          />
          <Project
            title="Phonelab"
            img={data.phone_lab.childImageSharp.fluid}
            tech="HTML | CSS/SASS | Javascript | React js/ Redux | Node js/ Express js | PostgreSQL"
            description="A web application that lets customers shop and purchase smartphone and smartphone accessories. Customers will create accounts, manage addresses and payment options, edit their shopping carts, complete orders and manage their account. Use email:test and password: abc as a test account. Mobile-first design patterns."
            codeLink="https://github.com/mcdanije22/ecommerce_phones"
            liveLink="https://ecommerce-phonelab.herokuapp.com/"
            side="left"
            isPrivate={false}
          />
          <Project
            title="Contacts"
            img={data.contacts.childImageSharp.fluid}
            tech="HTML | CSS/SASS | Javascript | React | localstorage"
            description="A web application that lets users create, edit and delete contacts from their contact list. The contact list is carried from session to session after reloads utilizing user's local storage. Users can star their favorite contacts and quickly search for specific contacts. Mobile-first design patterns."
            codeLink="https://github.com/mcdanije22/new_contact_app'"
            liveLink="https://contact-application-new.herokuapp.com/"
            side="right"
            isPrivate={false}
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
      {/* </Layout> */}
      <div id="portfolioFooter">
        <p>© {new Date().getFullYear()}, built by Josh McDaniel</p>
      </div>
    </>
  )
}

export default IndexPage
