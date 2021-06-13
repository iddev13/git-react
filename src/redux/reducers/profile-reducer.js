import { profileApi } from "../../api/api";

const SET_USER_PROFILE = 'git_react/profile/SET_USER_PROFILE';
const SAVE_PHOTO_SUCCESS = 'git/react/profile/SAVE_PHOTO_SUCCESS';

let initialState = {
	profile: null,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case SAVE_PHOTO_SUCCESS:
			console.log('action.photo');
			return {
				...state,
				profile: { ...state.profile, photos: action.photo }
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

export const savePhotoSuccess = (photo) => {
	return {
		type: SAVE_PHOTO_SUCCESS,
		photo
	}
}

export const savePhoto = (file) => async (dispatch) => {
	let response = await profileApi.savePhoto(file)

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.photos))
	}
}

// export const saveProfile = (profile) => async (dispatch) => {
// 	let response = await profileApi.saveProfile(profile)

// 	if (response.data.resultCode === 0) {
// 		dispatch(savePhotoSuccess(response.data.photos))
// 	}
// }

export default profileReducer;