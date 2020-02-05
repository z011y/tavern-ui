import {
  SET_RESULTS_VENUES,
  SET_POPULAR_VENUES,
  SET_CURRENT_VENUE
} from "./types";

import axios from "axios";

export function fetchVenuesWithQuery(query) {
  return function(dispatch) {
    axios
      .get(`http://localhost:8000/venue_detail/?name=${query}`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        console.log(response.data);
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
      .get("http://localhost:8000/venues/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: SET_POPULAR_VENUES,
          payload: response.data
        });
      });
  };
}

export function setCurrentVenue(name, phone, email, address) {
  console.log(name, phone, email, address);
  return {
    type: SET_CURRENT_VENUE,
    payload: {
      name: name,
      phone: phone,
      email: email,
      address: address
    }
  };
}
