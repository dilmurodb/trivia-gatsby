import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class CatGeneratorPage extends Component {
  state = {
    loading: true,
    error: false,
    data: [],
  }

  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    fetch("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key": "369c4b71-4927-4bea-bd18-161e8cc3d3ba",
      },
    })
      .then(res => {
        return res.json()
      })
      .then(jsonData => {
        this.setState({
          data: jsonData[0].url,
          loading: false,
        })
      })
      .catch(error => {
        console.log(error, "catch the hoop")
      })
  }
  render() {
    const { data } = this.state

    return (
      <Layout>
        <SEO title="RandomCat page" />
        <h1>Random Cat Pictures</h1>
        <p>If you'd like to see more please click the button below</p>
        <button onClick={this.fetchData} style={{ marginBottom: `20px` }}>
          Next
        </button>
        <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
          <div
            style={{
              width: `300px`,
              height: `500px`,
            }}
          >
            <img src={data} alt="new"></img>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CatGeneratorPage
