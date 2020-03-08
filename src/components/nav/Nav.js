import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Burger from "@animated-burgers/burger-slip"
import "@animated-burgers/burger-slip/dist/styles.css"
import "./hamburger.css"

const StyledBurger = styled(Burger)`
  position: absolute;
  top: 50px;
  right: 50px;

  z-index: 2000;
`

const Nav = ({ handleOverlayMenu, show }) => {
  return <StyledBurger onClick={handleOverlayMenu} isOpen={show} />
}

export default Nav
