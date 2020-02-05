import React, { Component, useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
          {this.props.user.logged_in ? (
            <Link to={"/find"}>Find</Link>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

export default connect(mapStateToProps)(Home);
