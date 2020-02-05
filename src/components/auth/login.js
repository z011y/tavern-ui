import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import history from "../../history";

import { connect } from "react-redux";
import * as actions from "../../actions";

import LoginForm from "./loginForm";

class Login extends Component {
  onSubmit = data => {
    this.props.login(data);
    history.push("/");
  };

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <LoginForm onSubmit={this.onSubmit} className="login__form" />
      </div>
    );
  }
}

Login = connect(
  null,
  actions
)(Login);

export default Login;
