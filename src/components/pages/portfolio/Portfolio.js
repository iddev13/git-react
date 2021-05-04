
import '../users/Users.css';

const Portfolio = (props) => {

	if (props.portfolio.length === 0) {
		props.setPortfolioUsers(
			[
				{ id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: false, fullName: 'Dmitry', status: 'I learn React', location: { country: 'Ukraine', city: 'Kharkiv' } },
				{ id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: true, fullName: 'Ivan', status: 'I learn React too', location: { country: 'Ukraine', city: 'Kiyv' } },
				{ id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: true, fullName: 'Andrew', status: 'I learn Angular', location: { country: 'Russia', city: 'Moscow' } },
				{ id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: false, fullName: 'Oleg', status: 'I learn Vue', location: { country: 'Belarus', city: 'Minsk' } },
			]
		)
	}

	return (
		<div className="users">
			<h2>Portfolio</h2>
			<div>
				{
					props.portfolio.map((elem) => {
						return <div className="users__item row" key={elem.id}>
							<div className="users__left row">
								<div>
									<img src={elem.photoUrl} alt="Avatar" />
								</div>
								<div>
									{elem.followed
										? <button onClick={() => { props.unfollow(elem.id) }}>unfollow</button>
										: <button onClick={() => { props.follow(elem.id) }}>follow</button>
									}

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
			{/* <button onClick={console.log(props.follow)}>push</button> */}
		</div>
	)
}

export default Portfolio;