const SET_WEATHER = 'SET_WEATHER';

let initialState = {
	weather: []
}


const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_WEATHER:
			return {
				...state,
				weather: { ...state.weather, ...action.data }
			}
		default:
			return state
	}
}

export const setWeatherAC = (data) => {
	return {
		type: SET_WEATHER,
		data
	}
}

export default weatherReducer;