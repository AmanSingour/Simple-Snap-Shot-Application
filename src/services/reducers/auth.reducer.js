import { 
  LOGIN_FAILD,
    LOGIN_SUCCESS, 
    LOGOUT 
} from "../../utils/data/__actionType";

const loadState = () => {
  try {
    const user = sessionStorage.getItem("user");
    if (user === null)
      return {
        loggedIn: false,
        user: null,
      };
    return {
      loggedIn: true,
      user: JSON.parse(user),
    };
  } catch (e) {
    return {
      loggedIn: false,
      user: null,
    };
  }
};

const initialState = loadState();


export const authReducer = (
    state=initialState,
    action
  ) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state, 
          user: action.payload,
          loggedIn: true,
        };
  
      case LOGIN_FAILD:
        return {
          user: null,
          loggedIn: false,
        };
  
      default:
        return state;
    }
  };
  