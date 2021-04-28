
import './Post.css';

const Post = (props) => {

	let postPosts = props.post.posts.map(elem => <li key={elem.id}>{elem.message}</li>)

	const onPostUpdate = (event) => {
		let value = event.target.value;
		props.updatePost(value);
	}

	const onPostAdd = () => props.addPost()

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
						value={props.post.newPostText}
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