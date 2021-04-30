const UPDATE_POST = 'UPDATE_POST';
const ADD_POST = 'ADD_POST';

let initialState = {
	posts: [
		{ id: 1, message: 'message1' },
		{ id: 2, message: 'message2' },
		{ id: 3, message: 'message3' },
		{ id: 4, message: 'message4' },
		{ id: 5, message: 'message5' },
	],
	newPostText: ''
}

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_POST:
			return {
				...state,
				newPostText: action.body
			}
		case ADD_POST:
			let newPosts = { id: 6, message: state.newPostText }
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, newPosts],
			}
		default:
			return state;
	}
}

export const updatePostAC = (value) => {
	return {
		type: UPDATE_POST,
		body: value
	}
}

export const addPostAC = () => {
	return {
		type: ADD_POST
	}
}

export default postReducer;