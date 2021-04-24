import { NavLink } from "react-router-dom";

const Nav = () => {

	let headerNav = [
		{ address: '/', name: 'home' },
		{ address: '/about', name: 'about' },
		{ address: '/portfolio', name: 'portfolio' },
		{ address: '/contact', name: 'contact' },
	];

	let headerLinks = headerNav.map((elem, index) => {
		return <li key={index.toString()}><NavLink to={elem.address}>{elem.name}</NavLink></li>
	})

	return (
		<nav className="header__nav row">
			<ul className="header__list row">{headerLinks}</ul>
		</nav>
	)
}

export default Nav;