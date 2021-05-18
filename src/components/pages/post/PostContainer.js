import React from 'react';
import { connect } from "react-redux";
import { postFollowAC, postUnfollowAC, setPostUsersAC, setPostCurrentPageAC, setPostTotalUsersCountAC, postToggleIsFetchingAC } from "../../../redux/reducers/post-reducer";
import Post from "./Post";
import * as axios from 'axios';
import Preloader from '../../common/preloader/Preloader';

class PostApiContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				console.log(response.data);
				this.props.toggleIsFetching(false)
				this.props.setPostUsers(response.data.items)
				this.props.setPostTotalUsersCount(response.data.totalCount)
			})
	}

	onPostPageChange = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setPostUsers(response.data.items)
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