import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageMusic from "../components/imageMusic"
import SEO from "../components/seo"

const MusicPage = () => (
  <Layout>
    <SEO title="Cinema page" />
    <h1>Welcome to Music category</h1>
    <p>If you'd like to play click the button below</p>
    <button>
      <Link to="/musicQuiz">click</Link>
    </button>
    <ImageMusic />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MusicPage
