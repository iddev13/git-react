import React from 'react';
import './Users.css';
import * as axios from 'axios';
import userPhoto from '../../../assets/images/user.png';

class Users extends React.Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				// debugger;
				console.log(response.data.items);
				this.props.setUser(response.data.items);
			})
	}

	render() {
		return (
			<div className="users">
				<h2>Users</h2>

				<div>
					{
						this.props.users.map((elem) => {
							return <div className="users__item row" key={elem.id}>
								<div className="users__left row">
									<div>
										<img src={elem.photos.small != null ? elem.photos.small : userPhoto} alt="Avatar" />
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
										<div>{elem.name}</div>
										<div>{elem.status}</div>
									</div>
									<div className="users__location row">
										<div>{'elem.location.country'}</div>
										<div>{'elem.location.city'}</div>
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

export default Users;