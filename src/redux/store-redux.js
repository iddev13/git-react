import { combineReducers, createStore } from "redux";
import aboutReducer from "./reducers/about-reducer";
import contactReducer from "./reducers/contact-reducer";
import portfolioReducer from "./reducers/portfolio-reducer";
import postReducer from "./reducers/post-reducer";
import usersReducer from "./reducers/users-reducer";


let reducers = combineReducers({
	contact: contactReducer,
	usersPage: usersReducer,
	post: postReducer,
	about: aboutReducer,
	portfolio: portfolioReducer
});

let store = createStore(reducers);

export default store;
window.store = store;