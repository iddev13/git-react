import { combineReducers, createStore } from "redux";
import contactReducer from "./reducers/contact-reducer";
import postReducer from "./reducers/post-reducer";
import usersReducer from "./reducers/users-reducer";


let reducers = combineReducers({
	contact: contactReducer,
	usersPage: usersReducer,
	post: postReducer
});

let store = createStore(reducers);

export default store;
window.store = store;