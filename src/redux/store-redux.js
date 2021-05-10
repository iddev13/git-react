import { combineReducers, createStore } from "redux";
import aboutReducer from "./reducers/about-reducer";
import homeReducer from "./reducers/home-reducer";
import portfolioReducer from "./reducers/portfolio-reducer";
import postReducer from "./reducers/post-reducer";
import usersReducer from "./reducers/users-reducer";
import weatherReducer from "./reducers/weather-reducer";


let reducers = combineReducers({
	usersPage: usersReducer,
	weatherPage: weatherReducer,
	homePage: homeReducer,
	postPage: postReducer,
	about: aboutReducer,
	portfolio: portfolioReducer
});

let store = createStore(reducers);

export default store;
window.store = store;