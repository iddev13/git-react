const UPDATE_ABOUT = 'UPDATE_ABOUT';
const ADD_ABOUT = 'ADD_ABOUT';

let initialState = {
	aboutPost: [
		{ id: 1, message: 'm1' },
		{ id: 2, message: 'm2' },
		{ id: 3, message: 'm3' },
		{ id: 4, message: 'm4' },
		{ id: 5, message: 'm5' },
	],
	newAboutText: ''
}

const aboutReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ABOUT:
			return {
				...state,
				newAboutText: action.body
			}
		case ADD_ABOUT:
			let newAboutPost = { id: 7, message: state.newAboutText }
			return {
				...state,
				newAboutText: '',
				aboutPost: [...state.aboutPost, newAboutPost]
			}
		default:
			return state;
	}
}

export const aboutUpdateAC = (value) => {
	return {
		type: UPDATE_ABOUT,
		body: value
	}
}

export const aboutAddAC = () => {
	return {
		type: ADD_ABOUT
	}
}

export default aboutReducer;