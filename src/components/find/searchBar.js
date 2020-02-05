import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { withRouter } from "react-router-dom";

export class SearchBar extends Component {
  constructor() {
    super();
  }

  handleFormSubmit = function({ query }) {
    this.props.onSubmit(query);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        className="find__search"
      >
        <Field
          name="query"
          component="input"
          type="text"
          placeholder="Search for venues"
          className={this.props.className}
        />
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: "searchBar"
})(SearchBar);

SearchBar = withRouter(SearchBar);
export default SearchBar;
