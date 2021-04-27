import { combineReducers, createStore } from "redux";
import aboutReducer from "./about-reducer";
import contactReducer from "./contact-reducer";
import postReducer from "./post-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
	contact: contactReducer,
	post: postReducer,
	about: aboutReducer,
	usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
window.store = store;