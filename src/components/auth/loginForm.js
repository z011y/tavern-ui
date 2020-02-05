import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";

class LoginForm extends Component {
  handleFormSubmit = function({ username, password }) {
    this.props.onSubmit(username, password);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="login-form">
        <Field
          className="login-form__username"
          component={FormInput}
          type="username"
          title="Username"
          placeholder="Username"
          name="username"
        />
        <Field
          className="login-form__password"
          component={FormInput}
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
        />
        <Field
          className="login-form__button"
          component={FormButton}
          type="submit"
          title="Login"
          name="login"
        />
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: "LoginForm"
})(LoginForm);

export default LoginForm;
