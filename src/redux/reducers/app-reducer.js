import { setAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'git_react/app/SET_INITIALIZED';

let initialState = {
	initialized: false

}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: action.initialized
			}
		default:
			return state;
	}
}

export const initializedSuccess = () => {
	return {
		type: INITIALIZED_SUCCESS
	}
}

export const initializeAppThunkCreator = () => (dispatch) => {
	let promise = dispatch(setAuthUserData());

	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess())
		})
}

export default appReducer;