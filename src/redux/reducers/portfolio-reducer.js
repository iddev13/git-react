const PORTFOLIO_FOLLOW = 'git_react/portfolio/PORTFOLIO_FOLLOW';
const PORTFOLIO_UNFOLLOW = 'git_react/portfolio/PORTFOLIO_UNFOLLOW';
const SET_PORTFOLIO_USERS = 'git_react/portfolio/SET_PORTFOLIO_USERS';
const SET_CURRENT_PAGE = 'git_react/portfolio/SET-SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'git_react/portfolio/SET-SET_TOTAL_USERS_COUNT';

let initialState = {
	portfolioUsers: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1
}

const portfolioReducer = (state = initialState, action) => {
	switch (action.type) {
		case PORTFOLIO_FOLLOW:
			return {
				...state,
				portfolioUsers: state.portfolioUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: true }
					}
					return elem;
				})
			}
		case PORTFOLIO_UNFOLLOW:
			return {
				...state,
				portfolioUsers: state.portfolioUsers.map((elem) => {
					if (elem.id === action.userId) {
						return { ...elem, followed: false }
					}
					return elem;
				})
			}
		case SET_PORTFOLIO_USERS:
			return {
				...state,
				portfolioUsers: [...action.users]
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.portfolioUsersCount
			}
		default:
			return state;
	}
}

export const portfolioFollowAC = (userId) => {
	return {
		type: PORTFOLIO_FOLLOW,
		userId
	}
}

export const portfolioUnfollowAC = (userId) => {
	return {
		type: PORTFOLIO_UNFOLLOW,
		userId
	}
}

export const setPortfolioUsersAC = (users) => {
	return {
		type: SET_PORTFOLIO_USERS,
		users
	}
}

export const setPortfolioCurrentPageAC = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}

export const setPortfolioUsersCountAC = (portfolioUsersCount) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		portfolioUsersCount
	}
}

export default portfolioReducer;