const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-SET_TOTAL_USERS_COUNT';



let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				// users: [...state.users]
				users: state.users.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				// users: [...state.users]
				users: state.users.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case SET_USERS:
			return {
				...state,
				users: [
					// ...state.users, 
					...action.users
				]
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.usersCount
			}
		default:
			return state;
	}
}

export const followAC = (userId) => {
	return {
		type: FOLLOW,
		userId
	}
}

export const unfollowAC = (userId) => {
	return {
		type: UNFOLLOW,
		userId
	}
}

export const setUsersAC = (users) => {
	return {
		type: SET_USERS,
		users
	}
}

export const setCurrentPageAC = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}

export const serTotslUsersCountAC = (usersCount) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		usersCount
	}
}

export default usersReducer;