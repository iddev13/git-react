
import { Route } from 'react-router';
import ContactContainer from '../pages/contact/ContactContainer';
import PostContainer from '../pages/post/PostContainer';
import UsersContainer from '../pages/users/UsersContainer';
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
				{/* <Route exact path="/" render={() => <HomeContainer />} /> */}
				<Route path="/users" render={() => <UsersContainer />} />
				<Route path="/post" render={() => <PostContainer />} />
				<Route path="/contact" render={() => <ContactContainer />} />
			</div>
		</main>
	)
}
export default Main;