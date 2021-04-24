
import logo from './logo.svg';
import './Header.css';
import Nav from './nav/Nav';

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
				</div>
			</div>
		</header>
	)
}
export default Header;