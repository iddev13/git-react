
import { Route } from 'react-router';
import AboutContainer from '../pages/about/AboutContainer';
import ContactContainer from '../pages/contact/ContactContainer';
import FriendsContainer from '../pages/friends/FriendsContainre';
import PortfolioContainer from '../pages/portfolio/PortfolioContainer';
import PostContainer from '../pages/post/PostContainer';
import UsersContainer from '../pages/users/UsersContainer';
import MessageContainer from '../pages/message/MessageContainer';
import HomeContainer from '../pages/home/HomeContainer';
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
				<Route path="/" render={() => <HomeContainer />} />
				<Route path="/about" render={() => <AboutContainer />} />
				<Route path="/users" render={() => <UsersContainer />} />
				<Route path="/friends" render={() => <FriendsContainer />} />
				<Route path="/message" render={() => <MessageContainer />} />
				<Route path="/portfolio" render={() => <PortfolioContainer />} />
				<Route path="/post" render={() => <PostContainer />} />
				<Route path="/contact" render={() => <ContactContainer />} />
			</div>
		</main>
	)
}
export default Main;