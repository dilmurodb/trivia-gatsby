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
    fetch(
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"
    )
      .then(res => {
        return res.json()
      })
      .then(json => {
        this.setState({
          data: json.results,
          loading: false,
        })
      })
  }
  render() {
    const { loading, data } = this.state
    return (
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
          >
            {data.map(charachter => (
              <p key={charachter.question}>{charachter.question}</p>
            ))}
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
