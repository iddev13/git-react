
import { Route } from 'react-router';
import AboutContainer from '../pages/about/AboutContainer';
import HomeContainer from '../pages/home/HomeContainer';
import PortfolioContainer from '../pages/portfilio/PortfolioContainer';
import PostContainer from '../pages/post/PostContainer';
import UsersContainer from '../pages/users/UsersContainer';
import WeatherContainer from '../pages/weather/WeatherContainer';
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
				<Route exact path="/" render={() => <HomeContainer />} />
				<Route path="/about" render={() => <AboutContainer />} />
				<Route path="/weather" render={() => <WeatherContainer />} />
				<Route path="/users" render={() => <UsersContainer />} />
				<Route path="/portfolio" render={() => <PortfolioContainer />} />
				<Route path="/post" render={() => <PostContainer />} />
			</div>
		</main>
	)
}
export default Main;