import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  height: 100vh;
  padding: 20px;
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--main-brand-color);
  }
  p:first-of-type {
    color: var(--light-accent);
    font-size: 1rem;
  }
  p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  a {
    color: var(--main-brand-color);
    padding: 5px;
    font-size: 3rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledContent>
      <p>This website is currently under construction</p>
      <h1>Hi, my name is Carl Bradbury</h1>

      <p>I am a developer from Nottingham, England.</p>
      <p>
        My stack: HTML, CSS, JavaScript, React, Node, Express, MongoDB, Gatsby
        and Git
      </p>
      <p>
        <span>
          <a href="https://www.linkedin.com/in/carl-bradbury">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </span>
        <span>
          <a href="https://github.com/carlbradbury79">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </span>
      </p>
    </StyledContent>
  </Layout>
)

export default IndexPage
