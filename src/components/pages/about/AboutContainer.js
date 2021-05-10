import { connect } from "react-redux";
import { aboutAddAC, aboutUpdateAC } from "../../../redux/reducers/about-reducer";
import About from "./About";

let mapStateToProps = (state) => {
	return {
		about: state.about
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		update: (value) => {
			dispatch(aboutUpdateAC(value));
		},
		add: () => {
			dispatch(aboutAddAC());
		}
	}
}

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutContainer;