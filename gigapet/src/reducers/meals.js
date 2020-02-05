import {
    FETCH_LIST_START,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_ERROR
  } from "../actions/meals";
  
  export const initialState = {
    meals: [
      {
        itemID: null,
        itemName: ""
      }
    ],
    isLoading: true,
    error: null
  };
  
  export function reducerList(state = initialState, action) {
    switch (action.type) {
      case FETCH_LIST_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_LIST_SUCCESS:
        return {
          ...state,
          meals: action.payload,
          isLoading: false
        };
      case FETCH_LIST_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  }