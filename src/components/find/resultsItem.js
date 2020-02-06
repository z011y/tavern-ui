import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

class ResultsItem extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="results-item">
        <div className="results-item__info">
          <div className="results-item__info__title">
            {this.props.currentVenue.name}
          </div>

          <div className="results-item__info__phone">
            {this.props.currentVenue.phone}
          </div>
          <div className="results-item__info__email">
            {this.props.currentVenue.email}
          </div>
          <div className="results-item__info__address">
            {this.props.currentVenue.address}
          </div>
        </div>

        <div className="results-item__img">
          <img src={`../../../static/assets/${this.props.currentVenue.img}`} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentVenue: state.venues.currentVenue
  };
}

export default connect(
  mapStateToProps,
  null
)(ResultsItem);
