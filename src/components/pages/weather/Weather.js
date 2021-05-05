import './Weather.css';
import * as axios from 'axios';

const Weather = (props) => {

	if (props.weather.length === 0) {

		axios.get('https://api.openweathermap.org/data/2.5/weather?id=706483&appid=682b3670ffea0aaff671b1d302f91d4c')
			.then(response => {
				console.log(response);
				props.setWeather(response)
			})

	}


	const onClickWeather = () => {
		console.log(props);
	}


	return (
		<div className="weather">
			<h2>WEATHER</h2>
			<div className="weather__item"></div>
			<div>
				{/* <div>{props.weather}</div> */}
				{/* <div>Temp {Math.round(props.weather.data.main.temp - 273)}</div> */}
				{/* <div>{props.weather.data.name}</div> */}
				<button onClick={onClickWeather}>Push</button>

			</div>
		</div>
	)
}

export default Weather;