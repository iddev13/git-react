const FOLLOW_PORTFOLIO = 'FOLLOW_PORTFOLIO';
const UNFOLLOW_PORTFOLIO = 'UNFOLLOW_PORTFOLIO';
const SET_USERS_PORTFOLIO = 'SET_USERS_PORTFOLIO';

let initialState = {
	portfolioUsers: []
}

const portfolioReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_PORTFOLIO:
			return {
				...state,
				portfolioUsers: state.portfolioUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case UNFOLLOW_PORTFOLIO:
			return {
				...state,
				portfolioUsers: state.portfolioUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case SET_USERS_PORTFOLIO:
			return {
				...state,
				portfolioUsers: [...action.portfolioUsers]
			}
		default:
			return state;
	}
}

export const followPortfolioAC = (userId) => {
	return {
		type: FOLLOW_PORTFOLIO,
		userId
	}
}

export const unfollowPortfolioAC = (userId) => {
	return {
		type: UNFOLLOW_PORTFOLIO,
		userId
	}
}

export const setPortfolioUsers = (portfolioUsers) => {
	return {
		type: SET_USERS_PORTFOLIO,
		portfolioUsers
	}
}

export default portfolioReducer;