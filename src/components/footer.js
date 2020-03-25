// import PropTypes from "prop-types";
import React from "react";
// import Layout from "./layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, fas, far);
const Footer = () => (
  <div>
    <footer
      style={{
        background: `black`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          height: 100,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <div
          className="footer-container"
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `center`
          }}
        >
          <div style={{ marginRight: `10px` }}>
            <a
              href="https://www.linkedin.com/in/dilmurod-bukharov-242987168/"
              target="_blank"
              rel="noopener"
              style={{ color: `white` }}
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/dilmurodb"
              target="_blank"
              rel="noopener"
              style={{ color: `white` }}
            >
              <FontAwesomeIcon icon={["fab", "github-square"]} size="3x" />
            </a>
          </div>
          <div style={{ marginLeft: `10px` }}>
            <a
              href="https://medium.com/@dilmurod.bukharov"
              target="_blank"
              rel="noopener"
              style={{ color: `white` }}
            >
              <FontAwesomeIcon icon={["fab", "medium"]} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
