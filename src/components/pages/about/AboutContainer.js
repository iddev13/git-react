import { connect } from "react-redux";
import { addAboutAC, updateAboutAC } from "../../../redux/about-reducer";
import About from "./About";

let mapStateToProps = (state) => {
	return {
		about: state.about
	}
}
let mapDispatchToprops = (dispatch) => {
	return {
		updateAbout: (value) => {
			dispatch(updateAboutAC(value));
		},
		addAbout: () => {
			dispatch(addAboutAC());
		}
	}
}

const AboutContainer = connect(mapStateToProps, mapDispatchToprops)(About);

export default AboutContainer;