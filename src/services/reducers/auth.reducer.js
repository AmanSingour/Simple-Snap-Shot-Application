import { 
    LOGIN_SUCCESS, 
    LOGOUT 
} from "../../utils/data/__actionType";

export const authReducer = (
    state = { loggedIn: false, user: null },
    action
  ) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          loggedIn: true,
        };
  
      case LOGOUT:
        return {
          ...state,
          user: null,
          loggedIn: false,
        };
  
      default:
        return state;
    }
  };
  