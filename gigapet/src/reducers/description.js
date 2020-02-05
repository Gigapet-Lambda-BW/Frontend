import {
    FETCH_DISH_START,
    FETCH_DISH_SUCCESS,
    FETCH_DISH_ERROR
  } from "../actions/description";
  
  export const initialState = {
    description: {
      food_item: "",
      food_group: "",
      item_id: ""
    },
    isLoading: true,
    error: null
  };
  
  export function reducerDescription(state = initialState, action) {
    switch (action.type) {
      case FETCH_DISH_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_DISH_SUCCESS:
        return {
          ...state,
          description: action.payload,
          isLoading: false
        };
      case FETCH_DISH_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  }