import { combineReducers, createStore } from "redux";
import aboutReducer from "./about-reducer";
import contactReducer from "./contact-reducer";
import friendsReducer from "./friends-reducer";
import homeReducer from "./home-reducer";
import messageReducer from "./message-reducer";
import portfolioReducer from "./portfolio-reducer";
import postReducer from "./post-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
	contact: contactReducer,
	post: postReducer,
	about: aboutReducer,
	usersPage: usersReducer,
	portfolio: portfolioReducer,
	friendsPage: friendsReducer,
	message: messageReducer,
	home: homeReducer,
});

let store = createStore(reducers);

export default store;
window.store = store;