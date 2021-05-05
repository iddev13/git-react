import React from 'react';
import '../users/Users.css';

class Message extends React.Component {


	componentDidMount() {
		if (this.props.message.length === 0) {
			this.props.setUsers(
				[
					{ id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: false, fullName: 'Dmitry', status: 'I learn React', location: { country: 'Ukraine', city: 'Kharkiv' } },
					{ id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: true, fullName: 'Ivan', status: 'I learn React too', location: { country: 'Ukraine', city: 'Kiyv' } },
					{ id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: true, fullName: 'Andrew', status: 'I learn Angular', location: { country: 'Russia', city: 'Moscow' } },
					{ id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU', followed: false, fullName: 'Oleg', status: 'I learn Vue', location: { country: 'Belarus', city: 'Minsk' } },
				]
			)
		}
	}

	render() {
		return (
			<div className="users">
				<h2>Message</h2>
				<div>
					{
						this.props.message.map((elem) => {
							return <div className="users__item row" key={elem.id}>
								<div className="users__left row">
									<div>
										<img src={elem.photoUrl} alt="Avatar" />
									</div>
									<div>
										{elem.followed
											? <button onClick={() => { this.props.unfollow(elem.id) }}
											>unfollow</button>
											: <button onClick={() => { this.props.follow(elem.id) }}>follow</button>}

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
			</div>
		)
	}
}

export default Message;