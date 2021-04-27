const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
	users: []
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

export default usersReducer;