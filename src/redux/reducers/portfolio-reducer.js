
const UPDATE_PORTFOLIO_POST = 'UPDATE_PORTFOLIO_POST';
const ADD_PORTFOLIO_POST = 'ADD_PORTFOLIO_POST';

let initialState = {
	portfolioPosts: [
		{ id: 1, message: 'message111' },
		{ id: 2, message: 'message222' },
		{ id: 3, message: 'message333' },
		{ id: 4, message: 'message444' },
	],
	newPortfolioText: ''
}

const portfolioReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_PORTFOLIO_POST:

			return {
				...state,
				newPortfolioText: action.body
			}

		case ADD_PORTFOLIO_POST:
			let newPortfolioPost = { id: 5, message: state.newPortfolioText }
			return {
				...state,
				newPortfolioText: '',
				portfolioPosts: [...state.portfolioPosts, newPortfolioPost]
			}
		default:
			return state;
	}
}

export const updatePortfolioAC = (value) => {
	return {
		type: UPDATE_PORTFOLIO_POST,
		body: value
	}
}

export const addPortfolioAC = () => {
	return {
		type: ADD_PORTFOLIO_POST
	}
}

export default portfolioReducer;