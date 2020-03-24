import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageActivity from "../components/imageActivity"
import SEO from "../components/seo"

const ActivityPage = () => (
  <Layout>
    <SEO title="Cinema page" />
    <h1>Welcome to Geography category</h1>
    <p>If you'd like to play click the button below</p>
    <button>
      <Link to="/activityGenerator">click</Link>
    </button>
    <ImageActivity />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ActivityPage
