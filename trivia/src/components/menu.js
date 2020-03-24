import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div
    style={{
      background: `gold`,
      paddingTop: `10px`,
    }}
  >
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-evenly`,
      }}
    >
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/cinema">Cinema</Link>
      </li>
      <li>
        <Link to="/music">Music</Link>
      </li>
      <li>
        <Link to="/geography">Geography</Link>
      </li>
    </ul>
  </div>
)

export default Menu
