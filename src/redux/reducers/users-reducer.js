import { getUsers } from "../../api/api";
import { updateObjectInArray } from "../../utils/object-helpers";

const FOLLOW = 'git_react/users/FOLLOW';
const UNFOLLOW = 'git_react/users/UNFOLLOW';
const SET_USERS = 'git_react/users/SET-USERS';
const SET_CURRENT_PAGE = 'git_react/users/SET-SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'git_react/users/SET-SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'git_react/users/TOGGLE_IS_FETCHING';

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	portionSize: 10
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
				// users: state.users.map((elem) => {
				// 	if (elem.id === action.userId) {
				// 		return { ...elem, followed: true }
				// 	}
				// 	return elem;
				// })
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
				// users: state.users.map((elem) => {
				// 	if (elem.id === action.userId) {
				// 		return { ...elem, followed: false }
				// 	}
				// 	return elem;
				// })
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
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		default:
			return state;
	}
}

export const follow = (userId) => {
	return {
		type: FOLLOW,
		userId
	}
}

export const unfollow = (userId) => {
	return {
		type: UNFOLLOW,
		userId
	}
}

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	}
}

export const setCurrentPage = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}

export const setTotalUsersCount = (usersCount) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		usersCount
	}
}

export const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
	return async (dispatch) => {
		try {
			dispatch(toggleIsFetching(true));
			let data = await getUsers(currentPage, pageSize)
			dispatch(toggleIsFetching(false));
			console.log(data);
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		} catch (error) {
			console.log('Error user-reducer: ' + error);
		}

	}
}

export default usersReducer;