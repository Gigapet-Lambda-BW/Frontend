import { 
        FETCH_FOODITEM_START,
        FETCH_FOODITEM_SUCCESS,
        FETCH_FOODITEM_ERROR,
        ADD_FOODITEM,
        UPDATE_FOODITEM,
        DELETE_FOODITEM,
} from "../actions/foodActions";

export const initialState = {
  foodItems: [
    { name: "broccoli", healthStatus: true },
    { name: "sour patch kids", healthStatus: false }
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
        smurfArray: action.payload,
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
        foodItems: [...state.foodItems, action.payload]
      };
    case DELETE_FOODITEM: //start, success, error
      return {
        ...state,
        foodItems: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
