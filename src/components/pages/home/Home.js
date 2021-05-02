import '../users/Users.css';
import * as axios from 'axios';

const Home = (props) => {

	if (props.home.length === 0) {
		props.setHomeUsers(
			[
				{ id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: false, fullName: 'Dmitry', status: 'I learn React', location: { country: 'Ukraine', city: 'Kharkiv' } },
				{ id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: true, fullName: 'Ivan', status: 'I learn React too', location: { country: 'Ukraine', city: 'Kiyv' } },
				{ id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: true, fullName: 'Andrew', status: 'I learn Angular', location: { country: 'Russia', city: 'Moscow' } },
				{ id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: false, fullName: 'Oleg', status: 'I learn Vue', location: { country: 'Belarus', city: 'Minsk' } },
			]
		)
	}

	let weather = () => {
		axios.get('https://api.openweathermap.org/data/2.5/weather?id=706483&appid=682b3670ffea0aaff671b1d302f91d4c')
			.then(response => {
				console.log(response.data);
			})
	}

	return (
		<div className="users">
			<h2>Home</h2>
			<div>
				{
					props.home.map((elem) => {
						return <div className="users__item row" key={elem.id}>
							<div className="users__left row">
								<div>
									<img src={elem.photoUrl} alt="Avatar" />
								</div>
								<div>
									{elem.followed
										? <button onClick={() => { props.homeFollow(elem.id) }}
										>unfollow</button>
										: <button onClick={() => { props.homeUnfollow(elem.id) }}>follow</button>}

								</div>
							</div>
							<div className="users__rigth row">
								<div className="users__info row">
									<div>{elem.fullName}</div>
									<div>{elem.status}</div>
								</div>
								<div className="users__location row">
									<div>{elem.location.country}</div>
									<div>{elem.location.city}</div>
								</div>
							</div>
						</div>
					})
				}
			</div>
			<button onClick={weather}>Push</button>
		</div>
	)
}

export default Home;