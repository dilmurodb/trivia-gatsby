import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CinemaPage = () => (
  <Layout>
    <SEO title="Cinema page" />
    <h2>Welcome to Randomly Generated Stuff Web-Page</h2>
    <p>
      This web-site is for those who is looking for random funny jokes, pictures
      of cats and some random activity suggestions to make life more fun and
      exciting
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CinemaPage
