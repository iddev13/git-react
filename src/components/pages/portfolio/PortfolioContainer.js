import { connect } from "react-redux";
import { followPortfolioAC, setPortfolioUsers, unfollowPortfolioAC } from "../../../redux/reducers/portfolio-reducer";
import Portfolio from "./Portfolio";

const mapStateToProps = (state) => {
	return {
		portfolio: state.portfolio.portfolioUsers
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followPortfolioAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowPortfolioAC(userId));
		},
		setPortfolioUsers: (users) => {
			dispatch(setPortfolioUsers(users));
		}
	}
}


const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(Portfolio);

export default PortfolioContainer