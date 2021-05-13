
import { Route } from 'react-router';
import AboutContainer from '../pages/about/AboutContainer';
import PortfolioContainer from '../pages/portfilio/PortfolioContainer';
import UsersContainer from '../pages/users/UsersContainer';
import WeatherContainer from '../pages/weather/WeatherContainer';
import ProfileContainer from '../pages/profile/ProfileContainer';
import './Main.css';

const Main = () => {
	return (
		<main className="main">
			<div className="container">
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        			</a>
				<Route path="/about" render={() => <AboutContainer />} />
				<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
				<Route path="/weather" render={() => <WeatherContainer />} />
				<Route path="/users" render={() => <UsersContainer />} />
				<Route path="/portfolio" render={() => <PortfolioContainer />} />
			</div>
		</main>
	)
}
export default Main;

// ? - делает параметр :userId необязательным