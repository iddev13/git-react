const UPDATE_INPUT = 'UPDATE_INPUT';
const UPDATE_TEXAREA = 'UPDATE_TEXAREA';
const ADD_INPUT = 'ADD_INPUT';

let initialState = {
	aboutPosts: [
		{ id: 1, message: 'message aaa', textarea: 'text 1' },
		{ id: 2, message: 'message bbb', textarea: 'text 2' },
		{ id: 3, message: 'message ccc', textarea: 'text 3' },
		{ id: 4, message: 'message ddd', textarea: 'text 4' }
	],
	aboutText: '',
	aboutTextareaValue: ''
}

const aboutReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_INPUT:
			return {
				...state,
				aboutText: action.value
			}
		case ADD_INPUT:
			let newAboutPost = { id: 5, message: state.aboutText, textarea: state.aboutTextareaValue }
			return {
				...state,
				aboutText: '',
				aboutPosts: [...state.aboutPosts, newAboutPost]
			}
		case UPDATE_TEXAREA:
			return {
				...state,
				aboutTextareaValue: action.value
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
export const aboutUpdateTextareaAC = (value) => {
	return {
		type: UPDATE_TEXAREA,
		value
	}
}

export const aboutAddAC = () => {
	return {
		type: ADD_INPUT
	}
}
export default aboutReducer;