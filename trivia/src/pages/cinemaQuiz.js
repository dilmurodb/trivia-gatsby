import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CinemaQuizPage = () => (
  <Layout>
    <SEO title="CinemaQuiz page" />
    <h1>Welcome to CinemaQuiz</h1>
    <button>
      <Link to="/">click</Link>
    </button>
    <p>If you'd like to play click the button below</p>
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <div
        style={{
          width: `300px`,
          height: `200px`,
          backgroundColor: `lightskyblue`,
        }}
      ></div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CinemaQuizPage
