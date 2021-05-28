
import './Home.css';
import homeUserPhoto from '../../../assets/images/user.png';
import ProfileStatusFunction from '../../profile-status-function/ProfileFunction';
import { NavLink } from 'react-router-dom';

const Home = (props) => {

	let pagesCount = Math.ceil(props.totalHomeCount / props.pageSize)
	let pages = [];

	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className="home">
			<h1>Home Page</h1>
			<ProfileStatusFunction />
			<button onClick={props.onChangePage}>Жмяк!</button>
			<div className="home__nav">
				{
					pages.map((elem) => {
						return <span className={elem === props.currentPage
							? 'selected-page'
							: ''} onClick={() => { props.onChangePage(elem) }} key={elem}>{elem}</span>
					})
				}
			</div>
			<div className="home__inner">
				{
					props.homeUsers.map((elem) => {
						return <div className="home__item" key={elem.id}>
							<div className="home__item-left item-left">
								<div className="home-profile-photo">
									<NavLink to={"/profile/" + elem.id}>
										<img src={elem.photos.small
											? elem.photos.small
											: homeUserPhoto} alt="Avatar" />
									</NavLink>
								</div>
								<div>{elem.followed
									? <button onClick={() => { props.unfollowHome(elem.id) }}>unfollow</button>
									: <button onClick={() => { props.followHome(elem.id) }}>follow</button>
								}</div>
							</div>
							<div className="home__item-right item-right">
								<div className="item-right__info">
									<div>{elem.name}</div>
									<div>{elem.status
										? elem.status
										: 'Some status'}</div>
								</div>
								<div className="item-right__location">
									<div>Country</div>
									<div>City</div>
								</div>
							</div>
						</div>
					})
				}

			</div>
		</div >
	)
}

export default Home;