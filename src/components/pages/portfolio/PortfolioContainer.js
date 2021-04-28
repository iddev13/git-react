import { connect } from "react-redux";
import { addPortfolioAC, updatePortfolioAC } from "../../../redux/portfolio-reducer";
import Portfolio from "./Portfolio";

let mapStateToProps = (state) => {
	return {
		portfolio: state.portfolio
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updatePortfolio: (value) => {
			dispatch(updatePortfolioAC(value))
		},
		addPortfolio: () => {
			dispatch(addPortfolioAC())
		}
	}
}


const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(Portfolio);

export default PortfolioContainer;