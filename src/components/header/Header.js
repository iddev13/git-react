
import logo from './logo.svg';
import './Header.css';
import Nav from './nav/Nav';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner row">
					<div className="header__logo">
						<a href="/">
							<img src={logo} alt="logo" />
						</a>
					</div>
					<Nav />
					<div className="loginBlock">
						<NavLink to="/login">Login</NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header;