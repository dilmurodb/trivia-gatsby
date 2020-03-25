import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ActivityGeneratorPage extends Component {
  state = {
    loading: true,
    error: false,
    data: [],
  }

  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    fetch("http://www.boredapi.com/api/activity/")
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
        <SEO title="ActivitySuggestions page" />
        <h1>Random Activity Suggestions</h1>
        <p>
          If you'd like to see more suggestions please click the button below!
        </p>
        <button onClick={this.fetchData} style={{ marginBottom: `20px` }}>
          click
        </button>
        <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
          <div
            style={{
              width: `300px`,
              height: `200px`,
              backgroundColor: `lightgrey`,
              padding: `20px`,
            }}
          >
            <p>{data}</p>
            {/* <img src={data} alt="new"></img> */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default ActivityGeneratorPage
