import { combineReducers, createStore } from "redux";
import contactReducer from './reducers/contact-reducer';
import usersReducer from "./reducers/users-reducer";
// import aboutReducer from "./about-reducer";
// import friendsReducer from "./friends-reducer";
// import messageReducer from "./message-reducer";
// import portfolioReducer from "./portfolio-reducer";
// import postReducer from "./post-reducer";


let reducers = combineReducers({
	contact: contactReducer,
	usersPage: usersReducer,
	// post: postReducer,
	// about: aboutReducer,
	// portfolio: portfolioReducer,
	// friendsPage: friendsReducer,
	// message: messageReducer
});

let store = createStore(reducers);

export default store;
window.store = store;