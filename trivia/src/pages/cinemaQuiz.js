import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class CinemaQuizPage extends Component {
  state = {
    loading: true,
    error: false,
    data: [],
  }

  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple",
      {
        method: "GET",
        dataType: "JSON",
      }
    )
      .then(res => {
        return res.json()
      })
      .then(jsonData => {
        this.setState({
          data: jsonData.results[0].question,
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
        <h1>Welcome to CinemaQuiz</h1>
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
            {/* {data.map(result => (
              <p key={result.question}>{result.question}</p>
            ))} */}
            <p>{data}</p>
          </div>
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default CinemaQuizPage

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
