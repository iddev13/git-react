const CONTACT_FOLLOW = 'CONTACT_FOLLOW';
const CONTACT_UNFOLLOW = 'CONTACT_UNFOLLOW';
const SET_CONTACT_USERS = 'SET_CONTACT_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
	contactUsers: [],
	currentPage: 1,
	pageSize: 10,
	totalUsersCount: 0,
	isFetching: false
}

const contactReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONTACT_FOLLOW:
			return {
				...state,
				contactUsers: state.contactUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: true }
					}
					return elem
				})
			}
		case CONTACT_UNFOLLOW:
			return {
				...state,
				contactUsers: state.contactUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: false }
					}
					return elem
				})
			}
		case SET_CONTACT_USERS:
			return {
				...state,
				contactUsers: [...action.users]
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
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

export const setContactUsers = (users) => {
	return {
		type: SET_CONTACT_USERS,
		users
	}
}

export const contactFollow = (userId) => {
	return {
		type: CONTACT_FOLLOW,
		userId
	}
}

export const contactUnfollow = (userId) => {
	return {
		type: CONTACT_UNFOLLOW,
		userId
	}
}

export const setTotalUsersCount = (totalUsersCount) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		totalUsersCount
	}
}

export const setCurrentPage = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}
export const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}

export default contactReducer