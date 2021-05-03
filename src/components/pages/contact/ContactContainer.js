import { connect } from "react-redux";
import { addContactMessageCreator, updateContactMessageCreator } from "../../../redux/reducers/contact-reducer";
import Contact from "./Contact";

let mapStateToProps = (state) => {
	return {
		state: state.contact
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateContactMessage: (value) => {
			dispatch(updateContactMessageCreator(value));
		},
		addContactMessage: () => {
			dispatch(addContactMessageCreator());
		}
	}
}


const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;