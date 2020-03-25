import React from "react";
import Link from "gatsby-link";

const Menu = () => (
  <div
    style={{
      background: `gold`,
      paddingTop: `10px`
    }}
  >
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-evenly`
      }}
    >
      <li>
        <Link to="/about" style={{ textDecoration: `none`, color: `black` }}>
          <strong>About</strong>
        </Link>
      </li>
      <li>
        <Link to="/joke" style={{ textDecoration: `none`, color: `black` }}>
          <strong>Jokes</strong>
        </Link>
      </li>
      <li>
        <Link to="/cat" style={{ textDecoration: `none`, color: `black` }}>
          <strong>Cats</strong>
        </Link>
      </li>
      <li>
        <Link to="/activity" style={{ textDecoration: `none`, color: `black` }}>
          <strong>Suggestions</strong>
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;
