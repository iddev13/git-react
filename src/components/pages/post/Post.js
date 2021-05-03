import React from 'react';
import '../contact/Contact.css';

class Post extends React.Component {

	onUpdatePost = (event) => {
		let value = event.target.value;
		this.props.updatePost(value);
	}

	onAddPost = () => {
		this.props.addPost();
		console.log(this.props);
	}

	render() {

		let posts = this.props.post.posts.map((elem) => {
			return <li key={elem.id}>{elem.message}</li>
		})
		return (
			<div className="contact">
				<h2>post</h2>
				<div className="contact__item-wrapper">
					<div className="contact__item">
						<ul>{posts}</ul>
					</div>
					<div className="contact__item">
						<textarea
							onChange={this.onUpdatePost}
							placeholder="Enter some text"
							value={this.props.post.newPostText}
						/>
					</div>
					<div className="contact__item">
						<button onClick={this.onAddPost}>Push</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Post;