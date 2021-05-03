import React from 'react';
import './Contact.css';

class Contact extends React.Component {

	onUpdateContactMessage = (event) => {
		let value = event.target.value;
		this.props.updateContactMessage(value);
	}

	onAddContactMessage = () => {
		this.props.addContactMessage();
	}

	render() {

		let contactPosts = this.props.state.contacts.map((elem, index) => {
			return <li key={index.toString()}>{elem.message}</li>
		});
		return (
			<div className="contact">
				<h2>class contact</h2>
				<div className="contact__item-wrapper">
					<div className="contact__item">
						<ul>{contactPosts}</ul>
					</div>
					<div className="contact__item">
						<textarea
							onChange={this.onUpdateContactMessage}
							placeholder="Enter some text"
							value={this.props.state.newContactText}
						/>
					</div>
					<div className="contact__item">
						<button
							onClick={this.onAddContactMessage}
						>
							Push</button>
					</div>
				</div>

			</div>
		)
	}
}

export default Contact;