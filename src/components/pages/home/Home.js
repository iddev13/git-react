
import './Home.css';
import homeUserPhoto from '../../../assets/images/user.png';
import ProfileStatusFunction from '../../profile-status-function/ProfileFunction';

const Home = (props) => {

	return (
		<div className="home">
			<h1>Home Page</h1>
			<ProfileStatusFunction />
			<button onClick={props.onChangePage}>Жмяк!</button>
			<div className="home__nav"></div>
			<div className="home__inner">
				{
					props.homeUsers.map((elem) => {
						return <div className="home__item" key={elem.id}>
							<div className="home__item-left item-left">
								<div className="home-profile-photo">
									<img src={elem.photos.small
										? elem.photos.small
										: homeUserPhoto} alt="Avatar" />

								</div>
								<div>{elem.followed
									? <button>unfollow</button>
									: <button>follow</button>
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