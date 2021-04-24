
import './Contact.css';

const Contact = (props) => {

	let contactPosts = props.state.contacts.map((elem, index) => {
		return <li key={index.toString()}>{elem.message}</li>
	});

	const onUpdateContactMessage = (event) => {
		let value = event.target.value;
		props.updateContactMessage(value);
		console.log(props);
	}

	const onAddContactMessage = () => {
		props.addContactMessage();
		console.log(props);
	}

	return (
		<div className="contact">
			<div className="contact__item">
				<h2>contact</h2>
			</div>
			<div className="contact__item">
				<ul>{contactPosts}</ul>
			</div>
			<div className="contact__item">
				<textarea
					onChange={onUpdateContactMessage}
					cols="30"
					rows="5"
					placeholder="Enter some text"
					value={props.state.newContactText}
				/>
			</div>
			<div className="contact__item">
				<button onClick={onAddContactMessage}>Push</button>
			</div>
		</div>
	)
}
export default Contact;