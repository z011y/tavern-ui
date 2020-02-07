import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  START_AUTH,
  LOGOUT
} from "../actions/types";

const INITIAL_STATE = {
  user: "",
  logged_in: localStorage.getItem("token") ? true : false,
  error: ""
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
    case AUTH_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error: error
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
