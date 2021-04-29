import { connect } from "react-redux";
import { setMessage, followMessageAC, unfollowMessageAC } from "../../../redux/message-reducer";
// import { followAC, unfollowAC } from "../../../redux/message-reducer";
import Message from "./Message";

let mapStateToProps = (state) => {
	return {
		message: state.message.message
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (messageId) => {
			dispatch(followMessageAC(messageId))
		},
		unfollow: (messageId) => {
			dispatch(unfollowMessageAC(messageId))
		},
		setMessage: (message) => {
			dispatch(setMessage(message))
		}
	}
}


const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;