import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import history from "../../history";

import { connect } from "react-redux";
import * as actions from "../../actions";

import LoginForm from "./loginForm";

class Login extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     username: "",
  //     password: "",
  //     errorText: "",
  //     logged_in: false
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.getUsers = this.getUsers.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  onSubmit = data => {
    this.props.login(data);
    history.push("/");
  };

  // getUsers() {
  //   fetch("http://localhost:8000/api/users/", {
  //     method: "GET",
  //     headers: {
  //       Authorization:
  //         "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImNhbWVyb25jaGFybGVzXyIsImV4cCI6MTU4MDQ5NjY3MiwiZW1haWwiOiJjYW1lcm9uLm50Y0BnbWFpbC5jb20ifQ.Z1KNgo3dl1DOyGzUjiz_fcgdH3No--opsJ1C6fE-GrY"
  //     }
  //   }).then(response => {
  //     localStorage.setItem("token", json.token);
  //   });
  // }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //     errorText: ""
  //   });
  // }

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
