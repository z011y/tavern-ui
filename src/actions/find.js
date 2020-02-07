import {
  SET_RESULTS_VENUES,
  SET_POPULAR_VENUES,
  SET_CURRENT_VENUE
} from "./types";

import axios from "axios";

export function fetchVenuesWithQuery(query) {
  return function(dispatch) {
    query = query.replace(/\ /g, "_");
    query = query.toLowerCase();
    console.log(query);
    axios
      .get(`https://api-tavern.herokuapp.com/venue_detail/?name=${query}`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        dispatch({
          type: SET_RESULTS_VENUES,
          payload: response.data
        });
      });
  };
}

export function fetchPopularVenues() {
  return function(dispatch) {
    axios
      .get("https://api-tavern.herokuapp.com/venues/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        dispatch({
          type: SET_POPULAR_VENUES,
          payload: response.data
        });
      });
  };
}

export function setCurrentVenue(name, phone, email, address, img) {
  return {
    type: SET_CURRENT_VENUE,
    payload: {
      name: name,
      phone: phone,
      email: email,
      address: address,
      img: img
    }
  };
}
