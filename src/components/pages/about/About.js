import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/form-controls/FormControls';
import './About.css';

const maxSymbolLength = maxLengthCreator(10)

const AboutForm = (props) => {

	const propsCheck = () => {
		console.log(props);
	}

	return (
		<>
			<form onSubmit={props.handleSubmit}>
				<div className="about__item">
					<Field
						component={Textarea}
						name="newAboutText"
						type="text"
						placeholder="About text"
						validate={[required, maxSymbolLength]}
					/>
				</div>

				<div className="about__item">
					<button>Push</button>
				</div>
			</form>
			<button onClick={propsCheck}>PushProps</button>
		</>
	)
}

const AboutReduxForm = reduxForm({ form: 'aboutForm' })(AboutForm)

class About extends React.Component {

	onAddText = (values) => {
		this.props.add(values.newAboutText);
		console.log(values);
	}
	render() {

		let aboutPosts = this.props.about.aboutPosts.map((elem) => <li key={elem.id}>{elem.message}</li>)

		return (
			<div className="about">
				<div className="about__item">{console.log(this.props)}</div>
				<h2>About</h2>
				<div className="about__item">
					<ul>
						{aboutPosts}
					</ul>
				</div>
				<AboutReduxForm {...this.props} onSubmit={this.onAddText} />
			</div>
		)
	}
}



export default About;