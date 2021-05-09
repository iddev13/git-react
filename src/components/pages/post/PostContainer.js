import { connect } from "react-redux";
import { followPostAC, setPostAC, unfollowPostAC } from "../../../redux/reducers/post-reducer";
import Post from "./Post";

let mapStateToProps = (state) => {
	return {
		posts: state.postPage.posts
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
		}
	}
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
export default PostContainer;