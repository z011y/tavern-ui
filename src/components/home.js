import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="home">
        <div className="home__hero">
          <h1>tavern</h1>
          <h2>
            Connecting <b>local</b> musicians to <b>local</b> venues
          </h2>
        </div>
        <div className="home__overview">
          <h2>
            Find local venues that are looking for talented musicians like you
          </h2>
          <button>Find</button>
        </div>
      </div>
    );
  }
}

export default Home;
