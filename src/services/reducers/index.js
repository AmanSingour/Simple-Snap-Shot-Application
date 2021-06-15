import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { searchReducer } from "./search.reducer";

export default combineReducers({
    auth: authReducer,
    photos: searchReducer
})