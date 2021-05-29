import { connect } from "react-redux";
import { aboutAddAC } from "../../../redux/reducers/about-reducer";
import About from "./About";

let mapStateToProps = (state) => {
	return {
		about: state.about
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		add: (newAboutText) => {
			dispatch(aboutAddAC(newAboutText));
		}
	}
}

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutContainer;