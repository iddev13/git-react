import { connect } from "react-redux";
import { followHomeAC, setHomeUsersAC, unfollowHomeAC } from "../../../redux/home-reducer";
import Home from "./Home";

let mapStateToProps = (state) => {
	return {
		home: state.home.homeUsers
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		homeFollow: usersId => dispatch(followHomeAC(usersId)),
		homeUnfollow: usersId => dispatch(unfollowHomeAC(usersId)),
		setHomeUsers: users => dispatch(setHomeUsersAC(users))
	}
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;