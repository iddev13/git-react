import { getBlogUsers } from "../../api/api";

const SET_BLOG_USERS = 'SET_BLOG_USERS';
const BLOG_CURRENT_PAGE = 'BLOG_CURRENT_PAGE';
const BLOG_FOLLOW = 'BLOG_FOLLOW';
const BLOG_UNFOLLOW = 'BLOG_UNFOLLOW';
const TOGGLE_BLOG_IS_FETCHING = 'TOGGLE_BLOG_IS_FETCHING';
const SET_BLOG_CURRENT_PAGE = 'SET_BLOG_CURRENT_PAGE';
const SET_TOTAL_BLOG_USERS_COUNT = 'SET_TOTAL_BLOG_USERS_COUNT';

let initialState = {
	blogUsers: [],
	currentPage: 1,
	pageSize: 10,
	totalBlogCount: 0,
	isFetching: false
}

const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_BLOG_USERS:
			return {
				...state,
				blogUsers: [...action.users]
			}
		case BLOG_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case BLOG_FOLLOW:
			return {
				...state,
				blogUsers: state.blogUsers.map(elem => {
					if (elem.id === action.userId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case BLOG_UNFOLLOW:
			return {
				...state,
				blogUsers: state.blogUsers.map(elem => {
					if (elem.id === action.userId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case TOGGLE_BLOG_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		case SET_TOTAL_BLOG_USERS_COUNT:
			return {
				...state,
				totalBlogCount: action.totalBlogCount
			}
		case SET_BLOG_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		default:
			return state;
	}
}

export const setBlogUsers = (users) => {
	return {
		type: SET_BLOG_USERS,
		users
	}
}

export const getCurrentpage = (currentPage) => {
	return {
		type: BLOG_CURRENT_PAGE,
		currentPage
	}
}

export const blogFollow = (userId) => {
	return {
		type: BLOG_FOLLOW,
		userId
	}
}

export const blogUnfollow = (userId) => {
	return {
		type: BLOG_UNFOLLOW,
		userId
	}
}

export const toggleBlogIsFetching = (isFetching) => {
	return {
		type: TOGGLE_BLOG_IS_FETCHING,
		isFetching
	}
}

export const setTotalBlogUsersCount = (totalBlogCount) => {
	return {
		type: SET_TOTAL_BLOG_USERS_COUNT,
		totalBlogCount
	}
}

export const setBlogCurrentPage = (currentPage) => {
	return {
		type: SET_BLOG_CURRENT_PAGE,
		currentPage
	}
}

export const getBlogUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleBlogIsFetching(true));
		getBlogUsers(currentPage, pageSize)
			.then(data => {
				dispatch(setBlogUsers(data.items))
				dispatch(toggleBlogIsFetching(false))
				dispatch(setTotalBlogUsersCount(data.totalCount))
			})
	}
}

export default blogReducer;