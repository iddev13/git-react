import React from 'react';
import { connect } from "react-redux";
import Contact from "./Contact";
import { setContactUsers } from '../../../redux/reducers/contact-reducer';
import * as axios from 'axios';

class ContactApiContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				console.log(response.data);
				this.props.setContactUsers(response.data.items)
			})
	}

	render() {
		return (
			<div>
				<Contact />
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		contactUsers: state.contactPage.contactUsers,
		currentPage: state.contactPage.currentPage,
		pageSize: state.contactPage.pageSize,
	}
}

const ContactContainer = connect(mapStateToProps, {
	setContactUsers,
})(ContactApiContainer);

export default ContactContainer;