import React, { Component } from "react";

import { connect } from "react-redux";
import Venue from "./venue";

class ResultsVenues extends Component {
  renderResults() {
    console.log(this.props.venues);
    const venues = this.props.venues.map((venue, index) => {
      return <Venue type="result" key={index} {...venue} />;
    });
    return venues;
  }

  render() {
    return <div className="find__results">{this.renderResults()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues.resultsVenues
  };
}

export default connect(mapStateToProps)(ResultsVenues);
