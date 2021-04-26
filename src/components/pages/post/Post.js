
import './Post.css';

const Post = (props) => {

	let postPosts = props.state.posts.map((elem, index) => {
		return <li key={index.toString()}>{elem.message}</li>
	})

	const onPostUpdate = (event) => {
		let value = event.target.value;
		props.postUpdate(value);
	}

	const onPostAdd = () => {
		props.postAdd();
		console.log(postPosts);
	}

	return (
		<div className="post">
			<h2>Post</h2>
			<div className="post__inner">
				<div className="post__item">
					<ul>{postPosts}</ul>
				</div>
				<div className="post__item">
					<input
						onChange={onPostUpdate}
						type="text"
						placeholder="Enter text"
						value={props.newPostText}
					/>
				</div>
				<div className="post__item">
					<button onClick={onPostAdd}>push</button>
				</div>
			</div>
		</div>
	)
}

export default Post;