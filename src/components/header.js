// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav/Nav"
import styled from "styled-components"
// import { motion } from "framer-motion"

const StyledHeader = styled.header`
  position: relative;
`

const Header = ({ siteTitle, handleOverlayMenu, show }) => {
  return (
    <StyledHeader>
      <Nav handleOverlayMenu={handleOverlayMenu} show={show} />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
