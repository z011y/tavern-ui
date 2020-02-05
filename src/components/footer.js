import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__logo">
          <img src="../../static/assets/2x/tavern-logo.png" />
          <h1>tavern</h1>
        </div>
        <a
          className="footer__signature"
          href="https://zollinger.tech"
          target="blank"
        >
          <FontAwesomeIcon className="signature-icon" icon={faCode} />
          <h1>by Cameron Zollinger</h1>
        </a>
      </div>
    );
  }
}

export default Footer;
