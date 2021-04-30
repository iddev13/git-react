
const UPDATE_ABOUT = 'UPDATE_ABOUT';
const ADD_ABOUT = 'ADD_ABOUT';

let initialState = {
	about: [
		{ id: 1, message: 'm1' },
		{ id: 2, message: 'm2' },
		{ id: 3, message: 'm3' },
		{ id: 4, message: 'm4' },
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
			let newMessage = { id: 6, message: state.newAboutText }
			return {
				...state,
				newAboutText: '',
				about: [...state.about, newMessage]
			}
		default:
			return state;
	}
}

export const updateAboutAC = (value) => {
	return {
		type: UPDATE_ABOUT,
		body: value
	}
}

export const addAboutAC = () => {
	return {
		type: ADD_ABOUT
	}
}

export default aboutReducer;