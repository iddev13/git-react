const UPDATE_INPUT = 'UPDATE_INPUT';
const ADD_INPUT = 'ADD_INPUT';

let initialState = {
	aboutPosts: [
		{ id: 1, message: 'message aaa' },
		{ id: 2, message: 'message bbb' },
		{ id: 3, message: 'message ccc' },
		{ id: 4, message: 'message ddd' }
	],
	aboutText: ''
}

const aboutReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_INPUT:
			return {
				...state,
				aboutText: action.value
			}
		case ADD_INPUT:
			let newAboutPost = { id: 5, message: state.aboutText }
			return {
				...state,
				aboutText: '',
				aboutPosts: [...state.aboutPosts, newAboutPost]
			}
		default:
			return state;
	}
}

export const aboutUpdateAC = (value) => {
	return {
		type: UPDATE_INPUT,
		value
	}
}

export const aboutAddAC = () => {
	return {
		type: ADD_INPUT
	}
}

export default aboutReducer;