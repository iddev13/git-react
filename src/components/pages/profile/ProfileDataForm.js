import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/form-controls/FormControls';

const ProfileDataForm = (props) => {
	// debugger;
	return (
		<form onSubmit={props.handleSubmit}>
			<div><button>save</button></div>
			<div>
				<b>Full Name</b>: <Field
					component={Input}
					name="fullName"
					type="text"
					placeholder="Full name"
				// validate={[required, maxSymbolLength]}
				/></div>
			<div>
				<b>Looking for a job</b>: <Field
					component={Input}
					name="lookingForAJob"
					type="checkbox"
				// validate={[required, maxSymbolLength]}
				/></div>
			<div>
				<b>My professional skills</b>: <Field
					component={Textarea}
					name="lookingForAJobDescription"
					type="text"
					placeholder="Your skills"
				// validate={[required, maxSymbolLength]}
				/></div>
			<div>
				<b>About me</b>: <Field
					component={Textarea}
					name="aboutMe"
					type="text"
					placeholder="About me"
				// validate={[required, maxSymbolLength]}
				/></div>
			<div>
				<b>Contacts</b>:
				{Object.keys(props.profile.contacts).map(elem => {
					return <div className="profileContacts" key={elem}>
						<b>{elem}</b>: {<Field
							component={Input}
							name={'contacts.' + elem}
							type="text"
							placeholder={elem}
						// validate={[required, maxSymbolLength]}
						/>}
					</div>
				})}
			</div>
		</form>
	)
}

const ProfileDataReduxForm = reduxForm({ form: 'profileForm' })(ProfileDataForm)

export default ProfileDataReduxForm;