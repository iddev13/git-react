import { combineReducers, createStore } from "redux";
import aboutReducer from "./reducers/about-reducer";
import authReducer from "./reducers/auth-reducer";
import contactReducer from "./reducers/contact-reducer";
import homeReducer from "./reducers/home-reducer";
import portfolioReducer from "./reducers/portfolio-reducer";
import postReducer from "./reducers/post-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";
import weatherReducer from "./reducers/weather-reducer";


let reducers = combineReducers({
	usersPage: usersReducer,
	weatherPage: weatherReducer,
	postPage: postReducer,
	about: aboutReducer,
	portfolio: portfolioReducer,
	profilePage: profileReducer,
	contactPage: contactReducer,
	auth: authReducer,
	homePage: homeReducer
});

let store = createStore(reducers);

export default store;
window.store = store;