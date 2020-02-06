import axios from "axios";
import { axiosWithAuth } from "../axiosAuth";

export const FETCH_LIST_START = "FETCH_LIST_START";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_ERROR = "FETCH_LIST_ERROR";

export function fetchMeals() {
  return dispatch => {
    dispatch({ type: FETCH_LIST_START });
    axiosWithAuth()
      .get("/foodgroups/2/item") //replace with correct route
      .then(res => {
        dispatch({ type: FETCH_LIST_SUCCESS, payload: res.data.restaurants });
      })
      .catch(err => {
        dispatch({ type: FETCH_LIST_ERROR, payload: err });
      });
  };
}