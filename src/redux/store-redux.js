import { combineReducers, createStore } from "redux";
import homeReducer from "./reducers/home-reducer";
import usersReducer from "./reducers/users-reducer";
import weatherReducer from "./reducers/weather-reducer";


let reducers = combineReducers({
	usersPage: usersReducer,
	weatherPage: weatherReducer,
	homePage: homeReducer
});

let store = createStore(reducers);

export default store;
window.store = store;