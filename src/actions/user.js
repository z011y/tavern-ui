import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  START_AUTH,
  LOGOUT,
  SET_RESULTS_VENUES
} from "./types";

import axios from "axios";

export function login({ username, password }) {
  return function(dispatch) {
    dispatch(startAuth);
    axios
      .post("http://localhost:8000/token-auth/", {
        username: username,
        password: password,
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.user));
        localStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        console.log("an error occurred", error);
        dispatch(authFailure(error));
      });
  };
}

const startAuth = () => ({
  type: START_AUTH
});

const authSuccess = user => ({
  type: AUTH_SUCCESS,
  payload: {
    user
  }
});

const authFailure = error => ({
  type: AUTH_FAILURE,
  payload: {
    error
  }
});

export function logout(user) {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
    payload: {
      user
    }
  };
}
