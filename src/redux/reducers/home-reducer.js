const FOLLOW_HOME_USERS = 'FOLLOW_HOME_USERS';
const UNFOLLOW_HOME_USERS = 'UNFOLLOW_HOME_USERS';
const SET_HOME_USERS = 'SET_HOME_USERS';

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

			}
		case UNFOLLOW_HOME_USERS:
			return {
				...state,

			}
		case SET_HOME_USERS:
			return {
				...state,
				homeUsers: action.users
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

export default homeReducer;