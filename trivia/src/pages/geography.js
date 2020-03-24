import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageGeography from "../components/imageGeography"
import SEO from "../components/seo"

const GeographyPage = () => (
  <Layout>
    <SEO title="Cinema page" />
    <h1>Welcome to Geography category</h1>
    <p>If you'd like to play click the button below</p>
    <button>
      <Link to="/geoQuiz">click</Link>
    </button>
    <ImageGeography />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GeographyPage
