import '../contact/Contact.css';

const About = (props) => {

	let aboutMessage = props.about.about.map((elem) => {
		return <li key={elem.id}>{elem.message}</li>
	})

	const onUpdateAbout = (event) => {
		let value = event.target.value;
		props.updateAbout(value);
	}

	const onAddAbout = () => {
		props.addAbout();
		console.log(props);
	}

	return (
		<div className="contact">
			<h2>ABOUT</h2>
			<div className="contact__item-wrapper">
				<div className="contact__item">
					<ul>{aboutMessage}</ul>
				</div>
				<div className="contact__item">
					<textarea
						onChange={onUpdateAbout}
						placeholder="Enter some text"
						value={props.about.newAboutText}
					/>
				</div>
				<div className="contact__item">
					<button onClick={onAddAbout}>Push</button>
				</div>
			</div>
		</div>
	)
}
export default About;