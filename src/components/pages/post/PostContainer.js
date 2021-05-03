import { connect } from "react-redux";
import { addPostAC, updatePostAC } from "../../../redux/reducers/post-reducer";
import Post from "./Post";

let mapStateToProps = (state) => {
	return {
		post: state.post
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updatePost:(value) => {
			dispatch(updatePostAC(value));
		},
		addPost: () => {
			dispatch(addPostAC());
		}
	}
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;