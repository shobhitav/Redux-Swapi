import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: true,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      state = {characters: [], fetching: true, error: null};
      break;
    case SUCCESS:
      state = {characters: action.payload, fetching: false, error: null};
      break;
    case FAILURE:
      state = {characters: [], fetching: false, error: action.error};
      break;
    default:
      break;
  }
  return state;
};
