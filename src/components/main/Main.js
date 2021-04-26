
import { Route } from 'react-router';
import AboutContainer from '../pages/about/AboutContainer';
import ContactContainer from '../pages/contact/ContactContainer';
import PostContainer from '../pages/post/PostContainer';
import './Main.css';

const Main = (props) => {
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
				<Route path="/post" render={() => <PostContainer />} />
				<Route path="/contact" render={() => <ContactContainer />} />
			</div>
		</main>
	)
}
export default Main;