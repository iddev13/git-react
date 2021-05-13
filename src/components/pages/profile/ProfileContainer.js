import React from 'react';
import { connect } from "react-redux";
import { setUserProfile } from '../../../redux/reducers/profile-reducer';
import Profile from "./Profile";
import * as axios from 'axios';

class ProfileAPIComponent extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				console.log(response.data);
				this.props.setUserProfile(response.data);
			})
	}
	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
}

const ProfileContainer = connect(mapStateToProps, {
	setUserProfile
})(ProfileAPIComponent);

export default ProfileContainer;