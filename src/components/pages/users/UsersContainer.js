import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../../redux/reducers/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUser: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;