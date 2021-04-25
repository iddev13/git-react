const UPDATE_POST = 'UPDATE-POST'
const ADD_POST = 'ADD-POST';

let initialState = {
	posts: [
		{ id: 1, message: 'message111' },
		{ id: 2, message: 'message222' },
		{ id: 3, message: 'message333' },
		{ id: 4, message: 'message444' },
		{ id: 5, message: 'message555' },
	],
	newPostText: ''
}

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_POST: {
			return {
				...state,
				newPostText: action.body
			}
		}
		case ADD_POST: {
			let newText = { id: 6, message: state.newPostText }
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, newText]
			}
		}
		default:
			return state;
	}
}

export const postUpdateCreator = (value) => {
	return {
		type: UPDATE_POST,
		body: value
	}
}

export const postAddCreator = () => {
	return {
		type: ADD_POST
	}
}

export default postReducer;