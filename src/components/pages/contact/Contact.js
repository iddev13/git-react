
import './Contact.css';

const Contact = (props) => {

	let contactPosts = props.state.contacts.map((elem, index) => {
		return <li key={index.toString()}>{elem.message}</li>
	});

	const onUpdateContactMessage = (event) => {
		let value = event.target.value;
		props.updateContactMessage(value);
	}

	const onAddContactMessage = () => {
		props.addContactMessage();
	}

	return (
		<div className="contact">
			<h2>contact</h2>
				<div className="contact__item-wrapper">
					<div className="contact__item">
						<ul>{contactPosts}</ul>
					</div>
					<div className="contact__item">
						<textarea
							onChange={onUpdateContactMessage}
							placeholder="Enter some text"
							value={props.state.newContactText}
						/>
					</div>
					<div className="contact__item">
						<button onClick={onAddContactMessage}>Push</button>
					</div>
				</div>
			
		</div>
	)
}
export default Contact;