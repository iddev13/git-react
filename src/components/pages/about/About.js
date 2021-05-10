import React from 'react';
import './About.css';

class About extends React.Component {

	onUpdateText = (event) => {
		let value = event.target.value;
		this.props.update(value)
	}

	onAddText = () => {
		this.props.add()
	}

	render() {

		let aboutPosts = this.props.about.aboutPosts.map((elem) => <li key={elem.id}>{elem.message}</li>
		)

		return (
			<div>
				<div>{console.log(this.props)}</div>
				<h2>About</h2>
				<div>
					<ul>
						{aboutPosts}
					</ul>
				</div>
				<div>
					<input
						onChange={this.onUpdateText}
						type="text"
						value={this.props.about.aboutText} />
				</div>
				<div>
					<button onClick={this.onAddText}>Push</button>
				</div>
			</div>
		)
	}
}

export default About;