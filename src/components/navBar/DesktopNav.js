import React, { useState } from "react"
import { Link } from "gatsby"
import {
  TwitterOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons"
import "./DesktopNav.scss"
import { Row, Col } from "antd"

const DesktopNav = () => {
  return (
    <div id="desktopNavContainer">
      <Row justify="center">
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <ul className="navGroup">
            <li>
              <Link to="/">Code Along</Link>
            </li>
            <li>
              <Link to="/bloglist">Posts</Link>
            </li>
            <li>
              <Link to="/Snippets">Snippets</Link>
            </li>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Subscribe</Link>
            </li>
          </ul>
        </Col>
        <Col xs={{ span: 0 }} lg={{ span: 4 }}></Col>
        <Col xs={{ span: 24 }} lg={{ span: 4 }}>
          <ul className="navGroup" style={{ justifyContent: "flex-end" }}>
            <li className="social">
              <Link to="/">
                <TwitterOutlined />
              </Link>
            </li>
            <li className="social">
              <Link to="/">
                <GithubOutlined />
              </Link>
            </li>
            <li className="social">
              <Link to="/">
                <LinkedinOutlined />
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}
export default DesktopNav
