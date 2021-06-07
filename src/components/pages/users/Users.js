import userPhoto from '../../../assets/images/user.png';
import React from 'react';
import './Users.css';
import { NavLink } from 'react-router-dom';
import Paginator from '../../common/paginator/Paginator';


const Users = (props) => {

	// let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	// let pages = [];
	// for (let i = 1; i <= pagesCount; i++) {
	// 	pages.push(i);
	// }

	return (
		<div className="users">
			<h2>Users</h2>
			<div className="users__nav">
				<button onClick={() => { console.log(props) }}>Push</button>
				{/* {
					pages.map((elem) => {
						return <span className={props.currentPage === elem ? 'selectet-page' : ''} onClick={(event) => { props.onPageChanged(elem) }} key={elem}>{elem}</span>
					})
				} */}

				<Paginator
					currentPage={props.currentPage}
					totalUsersCount={props.totalUsersCount}
					pageSize={props.pageSize}
					onPageChanged={props.onPageChanged}
				/>
			</div>
			<div>
				{
					props.users.map((elem) => {
						return <div className="users__item row" key={elem.id}>
							<div className="users__left row">
								<div>
									<NavLink to={'/profile/' + elem.id}>
										<img src={elem.photos.small != null ? elem.photos.small : userPhoto} alt="Avatar" />
									</NavLink>
								</div>
								<div>
									{elem.followed
										? <button onClick={() => { props.unfollow(elem.id) }}
										>unfollow</button>
										: <button onClick={() => { props.follow(elem.id) }}>follow</button>}

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

export default Users;