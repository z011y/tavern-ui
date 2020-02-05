import React, { Component } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="layout">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
