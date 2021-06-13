import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import './Main.css';
import AboutContainer from '../pages/about/AboutContainer';
import PortfolioContainer from '../pages/portfilio/PortfolioContainer';
import UsersContainer from '../pages/users/UsersContainer';
// import ProfileContainer from '../pages/profile/ProfileContainer';
import PostContainer from '../pages/post/PostContainer';
import ContactContainer from '../pages/contact/ContactContainer';
import HomeContainer from '../pages/home/HomeContainer';
import Login from '../pages/login/Login';
import MessageContainer from '../pages/message/MessageContainer';
import BlogContainer from '../pages/blog/BlogContainer';
import DialogContainer from '../pages/dialog/DialogContainer';

const ProfileContainer = React.lazy(() => import('../pages/profile/ProfileContainer'));

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
				<Switch>
					<Route exact path="/" render={() => <HomeContainer />} />
					<Route path="/about" render={() => <AboutContainer />} />
					<Route path="/profile/:userId?" render={() => {
						return <Suspense fallback={<div>Loading...</div>}>
							<ProfileContainer />
						</Suspense>
					}} />
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/message" render={() => <MessageContainer />} />
					<Route path="/portfolio" render={() => <PortfolioContainer />} />
					<Route path="/post" render={() => <PostContainer />} />
					<Route path="/blog" render={() => <BlogContainer />} />
					<Route path="/dialog" render={() => <DialogContainer />} />
					<Route path="/contact" render={() => <ContactContainer />} />
					<Route path="/login" render={() => <Login />} />
					<Route path="*" render={() => <div>404 NOT FOUND</div>} />
				</Switch>

			</div>
		</main>
	)
}
export default Main;


// :userId - params
// ? - делает параметр :userId необязательным