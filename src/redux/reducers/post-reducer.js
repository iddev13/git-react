const FOLLOW_POST = 'FOLLOW_POST';
const UNFOLLOW_POST = 'UNFOLLOW_POST';
const SET_POST = 'SET_POST';

let initialState = {
	posts: [],
}

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_POST:
			return {
				...state,
				posts: state.posts.map((elem) => {
					if (elem.id === action.postId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case UNFOLLOW_POST:
			return {
				...state,
				posts: state.posts.map((elem) => {
					if (elem.id === action.postId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case SET_POST:
			return {
				...state,
				posts: [...action.posts]
			}
		default:
			return state;
	}
}

export const followPostAC = (postId) => {
	return {
		type: FOLLOW_POST,
		postId
	}
}

export const unfollowPostAC = (postId) => {
	return {
		type: UNFOLLOW_POST,
		postId
	}
}

export const setPostAC = (posts) => {
	return {
		type: SET_POST,
		posts
	}
}

export default postReducer;