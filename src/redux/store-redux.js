import { combineReducers, createStore } from "redux";
import contactReducer from "./contact-reducer";


let reducers = combineReducers({
	contact: contactReducer
});

let store = createStore(reducers);

export default store;
window.store = store;