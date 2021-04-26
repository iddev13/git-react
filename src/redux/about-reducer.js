const UPDATE_ABOUT = 'UPDATE-ABOUT';
const ADD_ABOUT = 'ADD-ABOUT';

let initialState = {
	about: [
		{ id: 1, message: 'message111' },
		{ id: 2, message: 'message222' },
		{ id: 3, message: 'message333' },
		{ id: 4, message: 'message444' },
		{ id: 5, message: 'message555' },
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
			let newText = { id: 6, message: state.newAboutText };
			return {
				...state,
				newAboutText: '',
				about: [...state.about, newText]
			}
		default:
			return state;
	}
}

export const onAboutChangeAC = (value) => {
	return {
		type: UPDATE_ABOUT,
		body: value
	}
}

export const onAboutClickAC = () => {
	return {
		type: ADD_ABOUT
	}
}

export default aboutReducer;