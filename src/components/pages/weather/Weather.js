import React from 'react';
import './Weather.css';
import * as axios from 'axios';

class Weather extends React.Component {

	componentDidMount() {
		this.props.setWeather(
			axios.get('https://api.openweathermap.org/data/2.5/weather?id=706483&appid=682b3670ffea0aaff671b1d302f91d4c')
				.then(response => {
					// console.log(response);
					this.props.setWeather(response);
				})
		)

	}


	onClickWeather = () => {
		console.log(this.props);
	}

	render() {

		return (
			<div className="weather">
				<h2>WEATHER</h2>
				<div className="weather__item"></div>
				<div>
					<div>{console.log(this.props.weather.data)}</div>
					{/* <div>Temp {Math.round(this.props.weather.data.main.temp - 273)}</div> */}
					{/* <div>{this.props.weather.data.name}</div> */}
					<button onClick={this.onClickWeather}>Push</button>

				</div>
			</div>
		)
	}
}

export default Weather;