import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

class ActivityGeneratorPage extends Component {
  state = {
    loading: true,
    error: false,
    data: ""
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch("https://www.boredapi.com/api/activity?type=recreational")
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        this.setState({
          data: jsonData.activity,
          loading: false
        });
      })
      .catch(error => {
        console.log(error, "catch the hoop");
      });
  };
  render() {
    const { data } = this.state;

    return (
      <Layout>
        <SEO title="ActivitySuggestions page" />
        <h1>Random Activity Suggestions</h1>
        <p>
          If you'd like to see more suggestions please click the button below!
        </p>
        <button onClick={this.fetchData} style={{ marginBottom: `20px` }}>
          Next
        </button>
        <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
          <div
            style={{
              width: `300px`,
              height: `200px`,
              backgroundColor: `lightgrey`,
              padding: `20px`
            }}
          >
            <p>{data}</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ActivityGeneratorPage;
