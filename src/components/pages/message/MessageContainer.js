import { connect } from "react-redux";
import { followMessageAC, setMessageAC, unfollowMessageAC } from "../../../redux/reducers/message-reducer";
import Message from "./Message";


const mapStateToProps = (state) => {
	return {
		message: state.message.messageUsers
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followMessageAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowMessageAC(userId));
		},
		setUsers: (users) => {
			dispatch(setMessageAC(users));
		}
	}
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;