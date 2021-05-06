import { connect } from "react-redux";
import { homeFollowAC, homeUnfollowAC, setHomeUsersAC } from "../../../redux/reducers/home-reducer";
import Home from "./Home";

let mapStateYoProps = (state) => {
	return {
		home: state.homePage.homeUsers
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (homeUserId) => {
			dispatch(homeFollowAC(homeUserId));
		},
		unfollow: (homeUserId) => {
			dispatch(homeUnfollowAC(homeUserId));
		},
		setHomeUsers: (homeUsers) => {
			dispatch(setHomeUsersAC(homeUsers));
		}
	}
}

const HomeContainer = connect(mapStateYoProps, mapDispatchToProps)(Home);

export default HomeContainer;