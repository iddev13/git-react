import { connect } from "react-redux";
import { setWeatherAC } from "../../../redux/reducers/weather-reducer";
import Weather from "./Weather";

let mapStateToProps = (state) => {
	return {
		weather: state.weather.weather
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setWeather: (data) => {
			dispatch(setWeatherAC(data))
		}
	}
}

const WeatherContainer = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default WeatherContainer;