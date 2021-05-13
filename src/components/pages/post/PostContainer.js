import React from 'react';
import { connect } from "react-redux";
import { followPostAC, setCurrentPageAC, setPostAC, toggleIsFetchingPostAC, totalPostCountAC, unfollowPostAC, } from "../../../redux/reducers/post-reducer";
import Post from "./Post";
import * as axios from 'axios';
import Preloader from '../../common/preloader/Preloader';

class PostApiContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&${this.props.pageSize}`)
			.then((response) => {
				this.props.toggleIsFetching(false);
				console.log(response.data.totalCount);
				this.props.setPost(response.data.items)
				this.props.setTotalPostCount(response.data.totalCount)
			})
	}

	onPostPageChange = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setPost(response.data.items);
			})
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Post
					posts={this.props.posts}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					pageSize={this.props.pageSize}
					totalPostCount={this.props.totalPostCount}
					onPostPageChange={this.props.onPostPageChange}
					currentPage={this.props.currentPage}
					isFetching={this.props.isFetching}
				/>
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		posts: state.postPage.posts,
		pageSize: state.postPage.pageSize,
		totalPostCount: state.postPage.totalPostCount,
		currentPage: state.postPage.currentPage,
		isFetching: state.postPage.isFetching
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (postId) => {
			dispatch(followPostAC(postId));
		},
		unfollow: (postId) => {
			dispatch(unfollowPostAC(postId));
		},
		setPost: (posts) => {
			dispatch(setPostAC(posts));
		},
		setTotalPostCount: (postUsersCount) => {
			dispatch(totalPostCountAC(postUsersCount));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingPostAC(isFetching))
		}
	}
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostApiContainer);
export default PostContainer;