import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import user from "./userReducer";
import venues from "./venuesReducer";

const rootReducer = combineReducers({
  form,
  user,
  venues
});

export default rootReducer;
