import { getMessageUsers } from '../../api/api';

const SET_MESSAGE_USERS = 'SET_MESSAGE_USERS';
const MESSAGE_IS_FETCHING = 'MESSAGE_IS_FETCHING';
const MESSAGE_FOLLOW = 'MESSAGE_FOLLOW';
const MESSAGE_UNFOLLOW = 'MESSAGE_UNFOLLOW';
const SET_TOTAL_MESSAGE_USERS_COUNT = 'SET_TOTAL_MESSAGE_USERS_COUNT';
const SET_MESSAGE_CURRENT_PAGE = 'SET_MESSAGE_CURRENT_PAGE';

let initialState = {
	messageUsers: [],
	currentPage: 1,
	pageSize: 10,
	totalMessageCount: 0,
	isFetching: false
}

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MESSAGE_USERS:
			return {
				...state,
				messageUsers: [...action.users]
			}
		case MESSAGE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		case MESSAGE_FOLLOW:
			return {
				...state,
				messageUsers: state.messageUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case MESSAGE_UNFOLLOW:
			return {
				...state,
				messageUsers: state.messageUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}

		case SET_TOTAL_MESSAGE_USERS_COUNT:
			return {
				...state,
				totalMessageCount: action.totalUsersCount
			}
		case SET_MESSAGE_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		default:
			return state;
	}
}

export const setMessageUsers = (users) => {
	return {
		type: SET_MESSAGE_USERS,
		users
	}
}

export const toggleMessageIsFetching = (isFetching) => {
	return {
		type: MESSAGE_IS_FETCHING,
		isFetching
	}
}

export const followMessage = (userId) => {
	return {
		type: MESSAGE_FOLLOW,
		userId
	}
}

export const unfollowMessage = (userId) => {
	return {
		type: MESSAGE_UNFOLLOW,
		userId
	}
}

export const setTotalMessageUsersCount = (totalUsersCount) => {
	return {
		type: SET_TOTAL_MESSAGE_USERS_COUNT,
		totalUsersCount
	}
}

export const setMessageCurrentPage = (currentPage) => {
	return {
		type: SET_MESSAGE_CURRENT_PAGE,
		currentPage
	}
}

export const getMessageUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleMessageIsFetching(true));
		getMessageUsers(currentPage, pageSize).then(data => {
			dispatch(setMessageUsers(data.items))
			dispatch(setTotalMessageUsersCount(data.totalCount))
			dispatch(toggleMessageIsFetching(false))
		})
	}
}

export default messageReducer;