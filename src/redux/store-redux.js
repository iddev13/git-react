import { combineReducers, createStore } from "redux";
import contactReducer from "./contact-reducer";
import postReducer from "./post-reducer";


let reducers = combineReducers({
	contact: contactReducer,
	post: postReducer
});

let store = createStore(reducers);

export default store;
window.store = store;