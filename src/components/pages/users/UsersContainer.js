import React from 'react';
import Users from './Users';
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, getUsersThunkCreator } from "../../../redux/reducers/users-reducer";
import Preloader from '../../common/preloader/Preloader';
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../../redux/selectors/user-selectors';

class UsersAPIComponent extends React.Component {

	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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


// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching
// 	}
// }


let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state)
	}
}

const UsersContainer = connect(mapStateToProps,
	{
		follow,
		unfollow,
		setCurrentPage,
		getUsersThunkCreator,
	})(UsersAPIComponent);

export default UsersContainer;