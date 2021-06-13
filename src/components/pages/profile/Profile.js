
import { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import './Profile.css';
import ProfileDataReduxForm from './ProfileDataForm';

const Profile = (props) => {

	let [editMode, setEditMode] = useState(false);

	if (!props.profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (event) => {
		console.log(event.target.files[0].name);
		if (event.target.length) {
			props.savePhotoSuccess(event.target.files[0])
		}
	}

	const onSubmit = (formData) => {
		console.log(formData);
		// props.saveProfile(formData);
		setEditMode(false)
	}

	return (
		<div style={{ textAlign: 'left' }} >
			<h2>Profile</h2>
			<div>
				<img src={props.profile.photos.large} alt="Profile" />
			</div>
			{editMode
				? <ProfileDataReduxForm {...props} onSubmit={onSubmit} />
				: <ProfileData {...props} onMainPhotoSelected={onMainPhotoSelected} isOwner={props.isOwner}
					goToEditMode={() => { setEditMode(true) }} />}
		</div >
	)
}

const ProfileData = (props) => {
	return (
		<div className="profileData">
			{props.isOwner ? <div><button onClick={props.goToEditMode}>edit</button></div> : null}
			<div><b>About me: </b>{props.profile.aboutMe}</div>
			<div><b>Name: </b>{props.profile.fullName}</div>
			<div><b>Looking For A Job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'}</div>
			<div><b>My professional skills: </b>{props.profile.lookingForAJobDescription}</div>
			<div><b>Contacts: </b>{Object.keys(props.profile.contacts).map(elem => {
				return <Contact contactTitle={elem} contactValue={props.profile.contacts[elem]} key={elem} />
			})}</div>

			{props.isOwner && <input type="file" onChange={props.onMainPhotoSelected} />}
		</div>
	)
}

const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div style={{ fontSize: 22, color: 'green', textAlign: 'left', marginBottom: 10 }}><b>{contactTitle}</b>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contactValue}</div>
	)
}

export default Profile;