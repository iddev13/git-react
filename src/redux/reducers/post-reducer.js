const FOLLOW_POST = 'FOLLOW_POST';
const UNFOLLOW_POST = 'UNFOLLOW_POST';
const SET_POST = 'SET_POST';
const SET_CURRENT_PAGE = 'SET-SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
	posts: [],
	pageSize: 10,
	totalPostCount: 0,
	currentPage: 1,
	isFetching: false
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
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalPostCount: action.totalPostCount
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
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

export const setCurrentPageAC = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}

export const totalPostCountAC = (totalPostCount) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		totalPostCount
	}
}

export const toggleIsFetchingPostAC = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}

export default postReducer;