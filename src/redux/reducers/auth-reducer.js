

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: true,

}

const authAPI = 'lll'

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data
			}
		default:
			return state;
	}
}

export const setUserData = (userId, email, login) => {
	return {
		type: SET_USER_DATA,
		data: {
			userId,
			email,
			login
		}
	}
}

export const setAuthUserData = (id, login, email, isAuth) => {
	return {
		type: SET_USER_DATA,
		payload: [id, login, email, isAuth]
	}
}

export const getAuthUserData = () => (dispatch) => {
	return authAPI.me()
		.then(response => {
			if (response.data.resultCode === 0) {
				let { id, login, email } = response.data.data;
				dispatch(setAuthUserData(id, login, email, true));
			}
		})
}

export default authReducer;