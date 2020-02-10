import { 
        FETCH_FOODITEM_START,
        FETCH_FOODITEM_SUCCESS,
        FETCH_FOODITEM_ERROR,
        ADD_FOODITEM,
        UPDATE_FOODITEM,
        DELETE_FOODITEM,
} from "../actions/foodActions";

export const initialState = {
  foodItemsArray: [
    { name: "broccoli" },
    { name: "sour patch kids" }
  ]
};

export const dietReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case FETCH_FOODITEM_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_FOODITEM_SUCCESS:
      return {
        ...state,
        foodItemsArray: action.payload,
        isLoading: false
      };
    case FETCH_FOODITEM_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case UPDATE_FOODITEM:
      return {
        ...state,
        diet: action.payload,
        editing: false
      };
    case ADD_FOODITEM:
      return {
        ...state,
        foodItemsArray: [...state.foodItemsArray, action.payload]
      };
    case DELETE_FOODITEM: //start, success, error
      return {
        ...state,
        foodItemsArray: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
