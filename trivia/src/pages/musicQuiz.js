import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class MusicQuizPage extends Component {
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
        <SEO title="MuzicQuiz page" />
        <h1>Welcome to MusicQuiz</h1>
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
            <img src={data} alt="new"></img>
          </div>
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default MusicQuizPage
