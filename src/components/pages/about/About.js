
import './About.css';


const About = (props) => {

	let aboutPost = props.state.about.map((elem) => {
		return <li key={elem.id}>{elem.message}</li>
	})

	const onAboutChange = (event) => {
		let value = event.target.value;
		props.aboutChange(value);
	}

	const onAboutClick = () => {
		props.aboutClick();
	}

	return (
		<div className="about">
			<h2>About</h2>
			<div className="about__inner">
				<div className="about__item">
					<ul>{aboutPost}</ul>
				</div>
				<div className="about__item">
					<input
						onChange={onAboutChange}
						type="text"
						placeholder="Enter some text..."
						value={props.state.newAboutText}
					/>
				</div>
				<div className="about__item">
					<button onClick={onAboutClick}>Push</button>
				</div>
			</div>
		</div>
	)
}

export default About;