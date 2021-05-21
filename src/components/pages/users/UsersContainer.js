import React from 'react';
import Users from './Users';
import { connect } from "react-redux";
import { follow, setTotalUsersCount, setCurrentPage, setUsers, toggleIsFetching, unfollow } from "../../../redux/reducers/users-reducer";
import Preloader from '../../common/preloader/Preloader';
import { getUsers, getUsers2 } from '../../../api/api';

class UsersAPIComponent extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			// debugger;
			this.props.toggleIsFetching(false);
			console.log(data);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount)
		})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true);
		getUsers2(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
		})
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					isFetching={this.props.isFetching}
				/>
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

const UsersContainer = connect(mapStateToProps,
	{
		follow,
		unfollow,
		setUsers,
		setCurrentPage,
		setTotalUsersCount,
		toggleIsFetching
	})(UsersAPIComponent);

export default UsersContainer;