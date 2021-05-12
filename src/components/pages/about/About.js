import React from 'react';
import './About.css';

class About extends React.Component {

	onUpdateText = (event) => {
		let value = event.target.value;
		this.props.update(value)
	}

	onUpdateTextareaText = (event) => {
		let value = event.target.value;
		this.props.updateTextarea(value)
	}

	onAddText = () => {
		this.props.add()
	}

	render() {

		let aboutPosts = this.props.about.aboutPosts.map((elem) => <li key={elem.id}>{elem.message} - {elem.textarea}</li>
		)

		return (
			<div className="about">
				<div className="about__item">{console.log(this.props)}</div>
				<h2>About</h2>
				<div className="about__item">
					<ul>
						{aboutPosts}
					</ul>
				</div>
				<div className="about__item">
					<input
						onChange={this.onUpdateText}
						type="text"
						value={this.props.about.aboutText} />
				</div>
				<div className="about__item">
					<textarea
						onChange={this.onUpdateTextareaText}
						placeholder="Enter some text..." />
				</div>
				<div className="about__item">
					<button onClick={this.onAddText}>Push</button>
				</div>
			</div>
		)
	}
}

export default About;