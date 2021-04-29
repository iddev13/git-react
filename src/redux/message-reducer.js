const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'ADD_MESSAGE';
const SET_MESSAGE = 'SET_MESSAGE';

let initialState = {
	message: []
}

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				message: state.message.map((elem) => {
					if (elem.id === action.messageId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case UNFOLLOW:
			return {
				
				...state,
				message: state.message.map((elem) => {
					if (elem.id === action.messageId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case SET_MESSAGE:
			return {
				...state,
				message: [...action.message]
			}
		default:
			return state;
	}
}

export const followMessageAC = (messageId) => {
	return {
		type: FOLLOW,
		messageId
	}
}

export const unfollowMessageAC = (messageId) => {
	return {
		type: UNFOLLOW,
		messageId
	}
}

export const setMessage = (message) => {
	return {
		type: SET_MESSAGE,
		message
	}
}

export default messageReducer;