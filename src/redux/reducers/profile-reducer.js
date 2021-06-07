const SET_USER_PROFILE = 'git_react/profile/SET_USER_PROFILE';

let initialState = {
	profile: null
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		default:
			return state;
	}
}

export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile
	}
}

export default profileReducer;