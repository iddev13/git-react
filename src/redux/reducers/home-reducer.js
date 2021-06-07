import { getUsers } from '../../api/api'

const FOLLOW_HOME_USERS = 'git_react/homeFOLLOW_HOME_USERS';
const UNFOLLOW_HOME_USERS = 'git_react/homeUNFOLLOW_HOME_USERS';
const SET_HOME_USERS = 'git_react/homeSET_HOME_USERS';
const SET_TOTAL_HOME_USERS_COUNT = 'git_react/homeSET_TOTAL_HOME_USERS_COUNT';
const SET_HOM_CURRENT_PAGE = 'git_react/homeSET_HOM_CURRENT_PAGE';
const TOGGLE_HOME_IS_FETCHING = 'git_react/homeTOGGLE_HOME_IS_FETCHING';

let initialState = {
	homeUsers: [],
	currentPage: 1,
	pageSize: 10,
	totalHomeCount: 0,
	isFetching: false
}

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_HOME_USERS:
			return {
				...state,
				homeUsers: state.homeUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case UNFOLLOW_HOME_USERS:
			return {
				...state,
				homeUsers: state.homeUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case SET_HOME_USERS:
			return {
				...state,
				homeUsers: action.users
			}
		case SET_TOTAL_HOME_USERS_COUNT:
			return {
				...state,
				totalHomeCount: action.totalUsersCount
			}
		case SET_HOM_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case TOGGLE_HOME_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		default:
			return state;
	}
}

export const setHomeUsers = (users) => {
	return {
		type: SET_HOME_USERS,
		users
	}
}

export const followHome = (userId) => {
	return {
		type: FOLLOW_HOME_USERS,
		userId
	}
}

export const unfollowHome = (userId) => {
	return {
		type: UNFOLLOW_HOME_USERS,
		userId
	}
}

export const setTotalHomeUsersCount = (totalUsersCount) => {
	return {
		type: SET_TOTAL_HOME_USERS_COUNT,
		totalUsersCount
	}
}

export const setHomeCurrentPage = (currentPage) => {
	return {
		type: SET_HOM_CURRENT_PAGE,
		currentPage
	}
}

export const toggleHomeIsFetching = (isFetching) => {
	return {
		type: TOGGLE_HOME_IS_FETCHING,
		isFetching
	}
}

export const getHomeUsersThunkCreator = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleHomeIsFetching(true));
		let data = await getUsers(currentPage, pageSize)
		dispatch(setHomeUsers(data.items))
		dispatch(setTotalHomeUsersCount(data.totalCount))
		dispatch(toggleHomeIsFetching(false))
	}
}

export default homeReducer;