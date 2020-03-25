import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class JokeGeneratorPage extends Component {
  state = {
    loading: true,
    error: false,
    data: [],
  }

  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then(res => {
        return res.json()
      })
      .then(jsonData => {
        this.setState({
          data: jsonData.joke,
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
    return (
      <Layout>
        <SEO title="CinemaQuiz page" />
        <h1>Random Jokes</h1>
        <p>To read more Jokes like this please click the button below</p>
        <button onClick={this.fetchData} style={{ marginBottom: `20px` }}>
          Next
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
          </div>
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default JokeGeneratorPage

// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const CinemaQuizPage = () => (
//   <Layout>
//     <SEO title="CinemaQuiz page" />
//     <h1>Welcome to CinemaQuiz</h1>
//     <button>
//       <Link to="/">click</Link>
//     </button>
//     <p>If you'd like to play click the button below</p>
//     <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
//       <div
//         style={{
//           width: `300px`,
//           height: `200px`,
//           backgroundColor: `lightskyblue`,
//         }}
//       ></div>
//     </div>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default CinemaQuizPage
