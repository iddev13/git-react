import { applyMiddleware, combineReducers, createStore } from "redux";
import aboutReducer from "./reducers/about-reducer";
import authReducer from "./reducers/auth-reducer";
import contactReducer from "./reducers/contact-reducer";
import homeReducer from "./reducers/home-reducer";
import portfolioReducer from "./reducers/portfolio-reducer";
import postReducer from "./reducers/post-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";
import thunkMiddleware from "redux-thunk";
import messageReducer from "./reducers/message-reducer";
import { reducer as formReducer } from 'redux-form'
import blogReducer from "./reducers/blog-reducer";
import appReducer from "./reducers/app-reducer";
import dialogReducer from "./reducers/dialog-reducer";


let reducers = combineReducers({
	usersPage: usersReducer,
	postPage: postReducer,
	about: aboutReducer,
	portfolio: portfolioReducer,
	profilePage: profileReducer,
	contactPage: contactReducer,
	auth: authReducer,
	homePage: homeReducer,
	messagePage: messageReducer,
	blogPage: blogReducer,
	app: appReducer,
	dialogPage: dialogReducer,
	form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;