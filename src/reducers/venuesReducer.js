import {
  SET_RESULTS_VENUES,
  SET_POPULAR_VENUES,
  SET_CURRENT_VENUE
} from "../actions/types";

const INITIAL_STATE = {
  resultsVenues: [],
  popularVenues: [],
  currentVenue: [],
  searchActive: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_RESULTS_VENUES:
      const resultsVenues = action.payload;
      return {
        ...state,
        resultsVenues: resultsVenues,
        searchActive: true
      };
    case SET_POPULAR_VENUES:
      const popularVenues = action.payload;
      return {
        ...state,
        popularVenues: popularVenues
      };
    case SET_CURRENT_VENUE:
      const currentVenue = action.payload;

      return {
        ...state,
        currentVenue: currentVenue
      };
    default:
      return state;
  }
}
