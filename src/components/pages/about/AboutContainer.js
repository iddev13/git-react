import { connect } from "react-redux";
import { onAboutChangeAC, onAboutClickAC } from "../../../redux/about-reducer";
import About from "./About";


let mapStateToProps = (state) => {
	return {
		state: state.about
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		aboutChange: (value) => {
			dispatch(onAboutChangeAC(value))
		},
		aboutClick: () => {
			dispatch(onAboutClickAC());
		}
	}
}
const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutContainer;