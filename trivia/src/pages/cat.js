import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageCat from "../components/imageCat"
import SEO from "../components/seo"

const CatPage = () => (
  <Layout>
    <SEO title="Cinema page" />
    <h1>Welcome to Music category</h1>
    <p>If you'd like to play click the button below</p>
    <button>
      <Link to="/catGenerator">click</Link>
    </button>
    <ImageCat />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CatPage
