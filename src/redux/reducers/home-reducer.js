const FOLLOW_HOME_USERS = 'FOLLOW_HOME_USERS';
const UNFOLLOW_HOME_USERS = 'UNFOLLOW_HOME_USERS';
const SET_HOME_USERS = 'SET_HOME_USERS';

let initialState = {
	homeUsers: []
}

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_HOME_USERS:
			return {
				...state,
				homeUsers: state.homeUsers.map((elem) => {
					if (elem.id === action.homeUserId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case UNFOLLOW_HOME_USERS:
			return {
				...state,
				homeUsers: state.homeUsers.map((elem) => {
					if (elem.id === action.homeUserId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case SET_HOME_USERS:
			return {
				...state,
				homeUsers: [...action.homeUsers]
			}
		default:
			return state;
	}
}

export const homeFollowAC = (homeUserId) => {
	return {
		type: FOLLOW_HOME_USERS,
		homeUserId
	}
}

export const homeUnfollowAC = (homeUserId) => {
	return {
		type: UNFOLLOW_HOME_USERS,
		homeUserId
	}
}

export const setHomeUsersAC = (homeUsers) => {
	return {
		type: SET_HOME_USERS,
		homeUsers
	}
}

export default homeReducer;