// const CONTACT_FOLLOW = 'CONTACT_FOLLOW';
// const CONTACT_UNFOLLOW = 'CONTACT_UNFOLLOW';
const SET_CONTACT_USERS = 'SET_CONTACT_USERS';

let initialState = {
	contactUsers: [],
	currentPage: 1,
	pageSize: 10,
	isFetching: false
}

const contactReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CONTACT_USERS:
			return {
				...state,
				contactUsers: action.users
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

export default contactReducer