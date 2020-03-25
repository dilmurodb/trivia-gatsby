import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageActivity from "../components/imageActivity"
import SEO from "../components/seo"

const ActivityPage = () => (
  <Layout>
    <SEO title="Cinema page" />
    <h2>Are you bored? Here is some activity suggestions for you!</h2>
    <p>
      Please click the button below to see some activity suggestions which you
      might like!
    </p>
    <button
      style={{
        marginBottom: `20px`,
        backgroundColor: `gold`,
        fontSize: `20px`,
      }}
    >
      <Link
        to="/activityGenerator"
        style={{ textDecoration: `none`, padding: `10px` }}
      >
        Click
      </Link>
    </button>
    <ImageActivity />
  </Layout>
)

export default ActivityPage
