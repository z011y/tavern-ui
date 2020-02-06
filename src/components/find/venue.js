import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Venue extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    const { name, phone, email, address, img } = this.props;
    this.props.setCurrentVenue(name, phone, email, address, img);
  }

  render() {
    return (
      <Link
        to={`/find/${this.props.slug}`}
        onClick={this.handleClick.bind(this)}
        className="find__item"
      >
        <h2>{this.props.name}</h2>
        <img src={`../../../static/assets/${this.props.img}`} />
      </Link>
    );
  }
}

function mapStateToProps(state) {
  return {
    resultsVenues: state.venues.resultsVenues
  };
}

export default connect(
  mapStateToProps,
  actions
)(Venue);
