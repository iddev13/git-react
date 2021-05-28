import React from 'react';
import { connect } from "react-redux";
import { setUserProfile } from '../../../redux/reducers/profile-reducer';
import Profile from "./Profile";
import * as axios from 'axios';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileAPIComponent extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;

		if (!userId) {
			userId = 2
		}

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
		profile: state.profilePage.profile,
	}
}

// let AuthRedirectComponent = withAuthRedirect(ProfileAPIComponent);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// const ProfileContainer = connect(mapStateToProps, {
// 	setUserProfile
// })(WithUrlDataContainerComponent);

export default compose(
	connect(mapStateToProps, { setUserProfile }),
	withRouter,
	withAuthRedirect
)(ProfileAPIComponent);