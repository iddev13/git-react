
import { Route } from 'react-router';
import AboutContainer from '../pages/about/AboutContainer';
import PortfolioContainer from '../pages/portfilio/PortfolioContainer';
import UsersContainer from '../pages/users/UsersContainer';
import WeatherContainer from '../pages/weather/WeatherContainer';
import ProfileContainer from '../pages/profile/ProfileContainer';
import './Main.css';
import PostContainer from '../pages/post/PostContainer';
import ContactContainer from '../pages/contact/ContactContainer';

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
				<Route path="/post" render={() => <PostContainer />} />
				<Route path="/contact" render={() => <ContactContainer />} />
			</div>
		</main>
	)
}
export default Main;


// :userId - params
// ? - делает параметр :userId необязательным