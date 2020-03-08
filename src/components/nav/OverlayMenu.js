import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./OverlayMenu.css"

const OverlayMenu = props => {
  let overlayClass = "overlayMenu"
  if (props.show) {
    overlayClass = "overlayMenu open"
  }
  return (
    <nav className={overlayClass}>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/carl-bradbury">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li>
          <a href="https://github.com/carlbradbury79">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default OverlayMenu
