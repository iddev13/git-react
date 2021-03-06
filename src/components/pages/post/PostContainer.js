import React from 'react';
import { connect } from "react-redux";
import { postFollowAC, postUnfollowAC, setPostUsersAC, setPostCurrentPageAC, setPostTotalUsersCountAC, postToggleIsFetchingAC } from "../../../redux/reducers/post-reducer";
import Post from "./Post";
import Preloader from '../../common/preloader/Preloader';
import { getUsers, getUsers2 } from '../../../api/api';

class PostApiContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			console.log(data);
			this.props.toggleIsFetching(false)
			this.props.setPostUsers(data.items)
			this.props.setPostTotalUsersCount(data.totalCount)
		})
	}

	onPostPageChange = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true);
		getUsers2(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setPostUsers(data.items)
		})
	}

	render() {
		return (
			<div>
				{this.props.isFetching ? <Preloader /> : null}
				<Post
					postUsers={this.props.postUsers}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					currentPage={this.props.currentPage}
					pageSize={this.props.pageSize}
					totalUsersCount={this.props.totalUsersCount}
					isFetching={this.props.isFetching}
					onPostPageChange={this.onPostPageChange}
				/>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		postUsers: state.postPage.postUsers,
		currentPage: state.postPage.currentPage,
		pageSize: state.postPage.pageSize,
		totalUsersCount: state.postPage.totalUsersCount,
		isFetching: state.postPage.isFetching
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setPostUsers: (users) => {
			dispatch(setPostUsersAC(users));
		},
		follow: (userId) => {
			dispatch(postFollowAC(userId));
		},
		unfollow: (userId) => {
			dispatch(postUnfollowAC(userId));
		},
		setCurrentPage: (currentPage) => {
			dispatch(setPostCurrentPageAC(currentPage));
		},
		setPostTotalUsersCount: (usersCount) => {
			dispatch(setPostTotalUsersCountAC(usersCount))
		},
		toggleIsFetching: (isFetching) => {
			dispatch(postToggleIsFetchingAC(isFetching));
		}
	}
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostApiContainer)

export default PostContainer;