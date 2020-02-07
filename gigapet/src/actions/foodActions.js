import axios from "axios";
import { axiosWithAuth } from "../axiosAuth";

export const FETCH_FOODITEM_START = "FETCH_FOOD_START";
export const FETCH_FOODITEM_SUCCESS = "FETCH_FOOD_SUCCESS";
export const FETCH_FOODITEM_ERROR = "FETCH_FOOD_ERROR";
export const ADD_FOODITEM = "ADD_FOODITEM";
export const UPDATE_FOODITEM = "UPDATE_FOODITEM";
export const DELETE_FOODITEM = "DELETE_FOODITEM";

export function fetchFoodItem() {
  return dispatch => {
    dispatch({ type: FETCH_FOODITEM_START })
    axios
      .get("https://gigapet-bw-7.herokuapp.com/api/")
      .then(res => {
        dispatch({ type: FETCH_FOODITEM_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: FETCH_FOODITEM_ERROR, payload: err })
      })
  }
}

export function createFoodItem(name) {
  return dispatch => {
    axios
      .post("https://gigapet-bw-7.herokuapp.com/api/", {
        name: name
      })
      .then(res => {
        dispatch({
          type: ADD_FOODITEM,
          payload: res.data
        })
      })
      .catch(err => {
        throw err
      })
  }
}

export function deleteFoodItem(id) {
  return dispatch => {
    axios
      .delete(`https://gigapet-bw-7.herokuapp.com/api/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_FOODITEM,
          payload: res.data
        })
      })
  }
}