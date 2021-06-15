import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

// TO USE REDUX DEVTOOL WITH THUNK
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, 
     composeEnhancers(applyMiddleware(thunk)));

export default store