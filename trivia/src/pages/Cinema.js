import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageCinema from "../components/imageCinema"
import SEO from "../components/seo"

const CinemaPage = () => (
  <Layout>
    <SEO title="Cinema page" />
    <h1>Welcome to Cinema category</h1>
    <p>If you'd like to play click the button below</p>
    <button>
      <Link to="/cinemaQuiz">click</Link>
    </button>
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <ImageCinema />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CinemaPage
