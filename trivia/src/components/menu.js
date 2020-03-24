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
        <Link to="/joke">Random Jokes</Link>
      </li>
      <li>
        <Link to="/cat">Random Cat Pictures</Link>
      </li>
      <li>
        <Link to="/activity">Random Suggestions</Link>
      </li>
    </ul>
  </div>
)

export default Menu
