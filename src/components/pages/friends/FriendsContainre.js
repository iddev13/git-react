import { connect } from "react-redux";
import { followFriendsAC, setFriendsAC, unfollowFriendsAC } from "../../../redux/friends-reducer";
import Friends from "./Friends";

let mapStateToProps = (state) => {
	return {
		friends: state.friendsPage.friends
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (friendsId) => {
			dispatch(followFriendsAC(friendsId));
		},
		unfollow: (friendsId) => {
			dispatch(unfollowFriendsAC(friendsId));
		},
		setFriends: (friends) => {
			dispatch(setFriendsAC(friends));
		}
	}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;