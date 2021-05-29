
const ADD_INPUT = 'ADD_INPUT';

let initialState = {
	aboutPosts: [
		{ id: 1, message: 'message aaa' },
		{ id: 2, message: 'message bbb' },
		{ id: 3, message: 'message ccc' },
		{ id: 4, message: 'message ddd' }
	],
}

const aboutReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_INPUT:
			let newAboutPost = { id: 5, message: action.newAboutText }
			return {
				...state,
				aboutText: '',
				aboutPosts: [...state.aboutPosts, newAboutPost]
			}
		default:
			return state;
	}
}


export const aboutAddAC = (newAboutText) => {
	return {
		type: ADD_INPUT,
		newAboutText
	}
}
export default aboutReducer;