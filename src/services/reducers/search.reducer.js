import { SEARCH_FAILD, SEARCH_SUCCESS } from "../../utils/data/__actionType";

export const searchReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      var newState = action.payload;
      return newState;

    case SEARCH_FAILD:
      newState = []
      return newState;

    default:
      return state;
  }
};
