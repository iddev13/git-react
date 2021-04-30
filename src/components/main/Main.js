
import { Route } from 'react-router';
import ContactContainer from '../pages/contact/ContactContainer';
import UsersContainer from '../pages/users/UsersContainer';
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
				<Route path="/users" render={() => <UsersContainer />} />
				<Route path="/contact" render={() => <ContactContainer />} />
			</div>
		</main>
	)
}
export default Main;