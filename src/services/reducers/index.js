import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";

export default combineReducers({
    auth: userReducer,
})