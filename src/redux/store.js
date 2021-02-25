import {combineReducers, createStore} from "redux";
import aboutReducer from "./about-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    aboutPage: aboutReducer,
    authPage:authReducer
});

let store = createStore(reducers);


export default store;