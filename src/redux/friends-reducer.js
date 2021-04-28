const FOLLOW_FRIENDS = 'FOLLOW_FRIENDS';
const UNFOLLOW_FRIENDS = 'UNFOLLOW_FRIENDS';
const SET_FRIENDS = 'SET_FRIENDS';

let initialState = {
	friends: []
}

const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_FRIENDS:
			return {
				...state,
				friends: state.friends.map((elem) => {
					if (elem.id === action.friendsId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case UNFOLLOW_FRIENDS:
			return {
				...state,
				friends: state.friends.map((elem) => {
					if (elem.id === action.friendsId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case SET_FRIENDS:
			return {
				...state,
				friends: [
					// ...state.friends, 
					...action.friends
				]
			}
		default:
			return state;
	}
}

export const followFriendsAC = (friendsId) => {
	return {
		type: FOLLOW_FRIENDS,
		friendsId
	}
}

export const unfollowFriendsAC = (friendsId) => {
	return {
		type: UNFOLLOW_FRIENDS,
		friendsId
	}
}

export const setFriendsAC = (friends) => {
	return {
		type: SET_FRIENDS,
		friends
	}
}


export default friendsReducer;