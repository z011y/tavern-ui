import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../actions";

import Venue from "./venue";

class PopularVenues extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPopularVenues();
  }

  renderVenues = function() {
    const venues = this.props.popularVenues.map((venue, index) => {
      if (index < 6) {
        return <Venue type="recent" key={index} {...venue} />;
      }
    });
    return venues;
  };

  render() {
    return <div className="find__popular">{this.renderVenues()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    popularVenues: state.venues.popularVenues
  };
}

export default connect(
  mapStateToProps,
  actions
)(PopularVenues);
