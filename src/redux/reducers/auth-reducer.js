import { securityAPI } from "../../api/api";


const SET_USER_DATA = 'git_react/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'git_react/auth/GET_CAPTCHA_URL_SUCCESS';


let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: true,
	captchaUrl: null
}

const authAPI = 'lll'

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data
			}

		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.payload
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

export const getCaptchaUrlSuccess = (captchaUrl) => {
	return {
		type: GET_CAPTCHA_URL_SUCCESS,
		payload: { captchaUrl }
	}
}

export const getCaptchaUrl = () => async (dispatch) => {
	const response = await securityAPI.getCaptchaUrl();
	const captchaUrl = response.data.url;

	dispatch(getCaptchaUrlSuccess(captchaUrl))
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