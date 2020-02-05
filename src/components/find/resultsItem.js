import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import VenueImg from "../../../static/assets/venue-img.jpg";
import ChatRoom from "../chatRoom";

import { connect } from "react-redux";

class ResultsItem extends Component {
  constructor() {
    super();

    this.state = {
      chatRoom: false
    };

    this.toggleMessageComponent = this.toggleMessageComponent.bind(this);
  }

  toggleMessageComponent() {
    if (this.state.chatRoom === false) {
      this.setState({
        chatRoom: true
      });
    } else {
      this.setState({
        chatRoom: false
      });
    }
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
          <img src={VenueImg} />
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

{
  /* <div className="results-item__description">
  {this.props.venues.description}
</div> */
}
{
  /* {this.state.chatRoom === false ? (
  <div
    className={`message ${this.state.message}`}
    onClick={this.toggleMessageComponent}
  >
    <FontAwesomeIcon icon={faComment} />
  </div>
) : (
  <ChatRoom toggleMessageComponent={this.toggleMessageComponent} /> */
}
