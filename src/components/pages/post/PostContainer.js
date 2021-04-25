import { connect } from "react-redux";
import { postAddCreator, postUpdateCreator } from "../../../redux/post-reducer";
import Post from "./Post";

let mapStateToProps = (state) => {
	return {
		state: state.post
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		postUpdate: (value) => {
			dispatch(postUpdateCreator(value));
		},
		postAdd: () => {
			dispatch(postAddCreator());
		}
	}
}


const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;