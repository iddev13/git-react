const FOLLOW_POST_USER = 'git_react/post/FOLLOW_POST_USER';
const UNFOLLOW_POST_USER = 'git_react/post/UNFOLLOW_POST_USER';
const SET_POST_USERS = 'git_react/post/SET_POST_USERS';
const SET_POST_CURRENT_PAGE = 'git_react/post/SET_POST_CURRENT_PAGE';
const SET_POST_TOTAL_USERS_COUNT = 'git_react/post/SET_POST_TOTAL_USERS_COUNT';
const TOOGLE_POST_IS_FETCHING = 'git_react/post/TOOGLE_POST_IS_FETCHING';

let initialState = {
	postUsers: [],
	currentPage: 1,
	pageSize: 10,
	totalUsersCount: 0,
	isFetching: false
}

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_POST_USER:
			return {
				...state,
				postUsers: state.postUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case UNFOLLOW_POST_USER:
			return {
				...state,
				postUsers: state.postUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case SET_POST_USERS:
			return {
				...state,
				postUsers: [...action.users]
			}
		case SET_POST_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case SET_POST_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.usersCount
			}
		case TOOGLE_POST_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		default:
			return state;
	}
}

export const postFollowAC = (userId) => {
	return {
		type: FOLLOW_POST_USER,
		userId
	}
}

export const postUnfollowAC = (userId) => {
	return {
		type: UNFOLLOW_POST_USER,
		userId
	}
}

export const setPostUsersAC = (users) => {
	return {
		type: SET_POST_USERS,
		users
	}
}

export const setPostCurrentPageAC = (currentPage) => {
	return {
		type: SET_POST_CURRENT_PAGE,
		currentPage
	}
}

export const setPostTotalUsersCountAC = (usersCount) => {
	return {
		type: SET_POST_TOTAL_USERS_COUNT,
		usersCount
	}
}

export const postToggleIsFetchingAC = (isFetching) => {
	return {
		type: TOOGLE_POST_IS_FETCHING,
		isFetching
	}
}

export default postReducer;