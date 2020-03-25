import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageCat from "../components/imageCat"
import SEO from "../components/seo"

const CatPage = () => (
  <Layout>
    <SEO title="Cinema page" />
    <h1>Enjoy Random Cat Pictures</h1>
    <p>
      If you'd like to see more of these adorable cats, please click the button
      below
    </p>
    <button
      style={{
        marginBottom: `20px`,
        backgroundColor: `gold`,
        fontSize: `20px`,
      }}
    >
      <Link
        to="/catGenerator"
        style={{ textDecoration: `none`, padding: `10px` }}
      >
        Click
      </Link>
    </button>
    <ImageCat />
  </Layout>
)

export default CatPage
