import { combineReducers, createStore } from "redux";
import homeReducer from "./reducers/home-reducer";
import postReducer from "./reducers/post-reducer";
import usersReducer from "./reducers/users-reducer";
import weatherReducer from "./reducers/weather-reducer";


let reducers = combineReducers({
	usersPage: usersReducer,
	weatherPage: weatherReducer,
	homePage: homeReducer,
	postPage: postReducer,
});

let store = createStore(reducers);

export default store;
window.store = store;