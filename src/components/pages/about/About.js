
const About = (props) => {

	let aboutPosts = props.about.aboutPost.map((elem) => {
		return <li key={elem.id}>{elem.message}</li>
	})

	const onUpdateAbout = (event) => {
		let value = event.target.value;
		props.updateAbout(value);
	}

	const onAddAbout = () => {
		props.addAbout()
		console.log(props);
	}

	return (
		<div>
			<h2>about</h2>
			<div>
				<ul>{aboutPosts}</ul>
			</div>
			<div>
				<input
					onChange={onUpdateAbout}
					type="text"
					value={props.about.newAboutText} />
			</div>
			<div>
				<button onClick={onAddAbout}>Push</button>
			</div>
		</div>
	)
}

export default About;