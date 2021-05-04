import { connect } from "react-redux";
import { aboutAddAC, aboutUpdateAC } from "../../../redux/reducers/about-reducer";
import About from "./About";

const mapStateToProps = (state) => {
	return {
		about: state.about
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateAbout: (value) => {
			dispatch(aboutUpdateAC(value));
		},
		addAbout: () => {
			dispatch(aboutAddAC())
		}
	}
}

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutContainer;