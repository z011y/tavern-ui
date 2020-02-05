import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  START_AUTH,
  LOGOUT
} from "../actions/types";

const INITIAL_STATE = {
  user: "",
  logged_in: localStorage.getItem("token") ? true : false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      const { user } = action.payload;
      return {
        ...state,
        logged_in: true,
        user: user
      };
    case LOGOUT:
      return {
        ...state,
        logged_in: false,
        user: ""
      };
    default:
      return state;
  }
}
