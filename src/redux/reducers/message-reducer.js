const FOLLOW_MESSAGE = 'FOLLOW_MESSAGE';
const UNFOLLOW_MESSAGE = 'UNFOLLOW_MESSAGE';
const SET_MESSAGE_USERS = 'SET_MESSAGE_USERS';

let initialState = {
	messageUsers: []
}

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_MESSAGE:
			return {
				...state,
				messageUsers: state.messageUsers.map(elem => {
					if (elem.id === action.userId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case UNFOLLOW_MESSAGE:
			return {
				...state,
				messageUsers: state.messageUsers.map(elem => {
					if (elem.id === action.userId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case SET_MESSAGE_USERS:
			return {
				...state,
				messageUsers: [...state.messageUsers, ...action.users]
			}
		default:
			return state;
	}
}

export const followMessageAC = (userId) => {
	return {
		type: FOLLOW_MESSAGE,
		userId
	}
}
export const unfollowMessageAC = (userId) => {
	return {
		type: UNFOLLOW_MESSAGE,
		userId
	}
}

export const setMessageAC = (users) => {
	return {
		type: SET_MESSAGE_USERS,
		users
	}
}

export default messageReducer;