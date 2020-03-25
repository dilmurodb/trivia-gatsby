import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageJoke from "../components/imageJoke"
import SEO from "../components/seo"

const CinemaPage = () => (
  <Layout>
    <SEO title="Cinema page" />
    <h1>Enjoy Random Jokes</h1>
    <p>If you'd like to read some funny jokes please click the button below.</p>
    <button
      style={{
        marginBottom: `20px`,
        backgroundColor: `gold`,
        fontSize: `20px`,
      }}
    >
      <Link
        to="/jokeGenerator"
        style={{ textDecoration: `none`, padding: `10px` }}
      >
        Click
      </Link>
    </button>
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <ImageJoke />
    </div>
  </Layout>
)

export default CinemaPage
