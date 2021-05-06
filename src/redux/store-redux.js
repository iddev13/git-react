import { combineReducers, createStore } from "redux";
import aboutReducer from "./reducers/about-reducer";
import contactReducer from "./reducers/contact-reducer";
import homeReducer from "./reducers/home-reducer";
import messageReducer from "./reducers/message-reducer";
import portfolioReducer from "./reducers/portfolio-reducer";
import postReducer from "./reducers/post-reducer";
import usersReducer from "./reducers/users-reducer";
import weatherReducer from "./reducers/weather-reducer";


let reducers = combineReducers({
	contact: contactReducer,
	usersPage: usersReducer,
	post: postReducer,
	about: aboutReducer,
	portfolio: portfolioReducer,
	message: messageReducer,
	weatherPage: weatherReducer,
	homePage: homeReducer
});

let store = createStore(reducers);

export default store;
window.store = store;