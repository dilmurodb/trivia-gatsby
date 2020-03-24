import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class GeoQuizPage extends Component {
  state = {
    loading: true,
    error: false,
    data: [],
  }

  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    fetch("http://www.boredapi.com/api/activity/", {
      //   headers: {
      //     "x-api-key": "369c4b71-4927-4bea-bd18-161e8cc3d3ba",
      //   },
    })
      .then(res => {
        return res.json()
      })
      .then(jsonData => {
        this.setState({
          data: jsonData.activity,
          loading: false,
        })
        console.log(jsonData)
      })
      .catch(error => {
        console.log(error, "catch the hoop")
      })
  }
  render() {
    const { loading, data } = this.state
    console.log(`this is what I need ${data}`)
    return (
      <Layout>
        <SEO title="GeoQuiz page" />
        <h1>Welcome to GeoQuiz</h1>
        <button onClick={this.fetchData}>click</button>
        <p>If you'd like to play click the button below</p>
        <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
          <div
            style={{
              width: `300px`,
              height: `200px`,
              backgroundColor: `lightskyblue`,
            }}
          >
            <p>{data}</p>
            {/* <img src={data} alt="new"></img> */}
          </div>
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default GeoQuizPage
