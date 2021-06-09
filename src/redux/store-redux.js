import { applyMiddleware, combineReducers, createStore, compose } from "redux";
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
import profileStatusReducer from "./reducers/profile-status-reducer";


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
	profileStatus: profileStatusReducer,
	form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;