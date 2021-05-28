
import { Route } from 'react-router';
import AboutContainer from '../pages/about/AboutContainer';
import PortfolioContainer from '../pages/portfilio/PortfolioContainer';
import UsersContainer from '../pages/users/UsersContainer';
import WeatherContainer from '../pages/weather/WeatherContainer';
import ProfileContainer from '../pages/profile/ProfileContainer';
import './Main.css';
import PostContainer from '../pages/post/PostContainer';
import ContactContainer from '../pages/contact/ContactContainer';
import HomeContainer from '../pages/home/HomeContainer';
import Login from '../pages/login/Login';
import MessageContainer from '../pages/message/MessageContainer';

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
				<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
				<Route path="/weather" render={() => <WeatherContainer />} />
				<Route path="/users" render={() => <UsersContainer />} />
				<Route path="/message" render={() => <MessageContainer />} />
				<Route path="/portfolio" render={() => <PortfolioContainer />} />
				<Route path="/post" render={() => <PostContainer />} />
				<Route path="/contact" render={() => <ContactContainer />} />
				<Route path="/login" render={() => <Login />} />
			</div>
		</main>
	)
}
export default Main;


// :userId - params
// ? - делает параметр :userId необязательным