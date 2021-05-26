
import { Redirect } from 'react-router';
import Preloader from '../../common/preloader/Preloader';
import './Profile.css';

const Profile = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	if (!props.isAuth) return <Redirect to={"/login"} />

	return (
		<div>
			<h2>Profile</h2>
			<div>
				<img src={props.profile.photos.large} alt="Profile" />
			</div>
		</div>
	)
}

export default Profile;