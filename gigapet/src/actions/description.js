import api from "../api";

export const FETCH_DISH_START = "FETCH_DISH_START";
export const FETCH_DISH_SUCCESS = "FETCH_DISH_SUCCESS";
export const FETCH_DISH_ERROR = "FETCH_DISH_ERROR";

export function fetchDescription(id) {
  return dispatch => {
    dispatch({ type: FETCH_DISH_START });
    api()
      .get(`/foodgroups/item/${id}`) //replace with correct route 
      .then(res => {
        dispatch({ type: FETCH_DISH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_DISH_ERROR, payload: err });
      });
  };
}