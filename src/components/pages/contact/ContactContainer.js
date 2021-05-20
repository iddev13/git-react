import React from 'react';
import { connect } from "react-redux";
import Contact from "./Contact";
import { setContactUsers, contactFollow, contactUnfollow, setTotalUsersCount, setCurrentPage, toggleIsFetching } from '../../../redux/reducers/contact-reducer';
import * as axios from 'axios';
import Preloader from '../../common/preloader/Preloader';

class ContactApiContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				console.log(response.data);
				this.props.toggleIsFetching(false);
				this.props.setContactUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {

		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setContactUsers(response.data.items);
			})
	}


	render() {
		return (
			<div>
				{this.props.isFetching ? <Preloader /> : null}
				<Contact
					contactUsers={this.props.contactUsers}
					currentPage={this.props.currentPage}
					pageSize={this.props.pageSize}
					contactFollow={this.props.contactFollow}
					contactUnfollow={this.props.contactUnfollow}
					totalUsersCount={this.props.totalUsersCount}
					onPageChanged={this.onPageChanged}
				/>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		contactUsers: state.contactPage.contactUsers,
		currentPage: state.contactPage.currentPage,
		pageSize: state.contactPage.pageSize,
		totalUsersCount: state.contactPage.totalUsersCount,
		isFetching: state.contactPage.isFetching
	}
}

const ContactContainer = connect(mapStateToProps, {
	setContactUsers,
	contactFollow,
	contactUnfollow,
	setTotalUsersCount,
	setCurrentPage,
	toggleIsFetching
})(ContactApiContainer);

export default ContactContainer;