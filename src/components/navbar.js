import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import history from "../history";

import SearchBar from "./find/searchBar";

import Logo from "../../static/assets/2x/tavern-logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handle_logout = this.handle_logout.bind(this);
  }

  handle_logout = () => {
    this.props.logout();
    history.push("/");
  };

  handleSearchSubmit(query) {
    this.props.fetchVenuesWithQuery(query);
    history.push("/find");
  }

  render() {
    return (
      <div className="navbar">
        <Link to={"/"} className="navbar__logo">
          <img src={Logo} />
        </Link>
        <div className="navbar__search">
          {this.props.user.logged_in ? (
            <SearchBar
              onSubmit={query => this.handleSearchSubmit(query)}
              type="text"
              placeholder="Search for venues"
              className="input"
            />
          ) : null}
        </div>
        <div className="navbar__links">
          <Link to="/">Home</Link>

          {this.props.user.logged_in ? (
            [
              <Link key="find" to="/find">
                Find
              </Link>,
              <a key="logout" onClick={this.handle_logout}>
                Logout
              </a>
            ]
          ) : (
            <Link to="/login">Login</Link>
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

export default connect(
  mapStateToProps,
  actions
)(Navbar);
