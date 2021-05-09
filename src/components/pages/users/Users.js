import React from 'react';
import './Users.css';
import * as axios from 'axios';
import userPhoto from '../../../assets/images/user.png';

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				// debugger;
				console.log(response.data);
				this.props.setUser(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUser(response.data.items);
			})
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return (
			<div className="users">
				<h2>Users</h2>
				<div className="users__nav">
					<button onClick={() => { console.log(this.props) }}>Push</button>
					{
						pages.map((elem) => {
							return <span className={this.props.currentPage === elem ? 'selectet-page' : ''} onClick={(event) => { this.onPageChanged(elem) }} key={elem}>{elem}</span>
						})
					}
				</div>
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