import React from 'react';
import * as axios from 'axios';
import photo from '../../../assets/images/user.png';
import './Post.css';

class Post extends React.Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then((response) => {
				console.log(response);
				this.props.setPost(response.data.items)
			})
	}

	render() {
		return (
			<div className="post">
				<h2>POST</h2>
				<div className="post__inner">
					{this.props.posts.map((elem) => {
						return <div className="post__item" key={elem.id}>
							<div className="post__left">
								<div className="post__photo">
									<img src={elem.photos.small != null ? elem.photos.small : photo} alt="AVATAR" />
								</div>
								{
									elem.followed
										? <button onClick={() => { this.props.unfollow(elem.id) }}>unfollow</button>
										: <button onClick={() => { this.props.follow(elem.id) }}>follow</button>
								}
							</div>
							<div className="post__right">
								<div>{elem.name}</div>
							</div>
						</div>
					})

					}


				</div>
				<button onClick={() => { console.log(this.props.post) }} > PUSH</button>
			</div>
		)
	}
}

export default Post;