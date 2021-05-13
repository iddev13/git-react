
import photo from '../../../assets/images/user.png';
import './Post.css';

const Post = (props) => {

	let pagesCount = Math.ceil(props.totalPostCount / props.pageSize);
	let pages = [];
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className="post">
			<h2>POST</h2>
			<div className="post__inner">
				<div className="post-nav">
					{
						pages.map((elem) => {
							return <span className={props.currentPage === elem
								? 'selected-post-page'
								: null}
								onClick={() => { props.onPostPageChange(elem) }} key={elem}>{elem}</span>
						})
					}
				</div>
				{props.posts.map((elem) => {
					return <div className="post__item" key={elem.id}>
						<div className="post__left">
							<div className="post__photo">
								<img src={elem.photos.small != null ? elem.photos.small : photo} alt="AVATAR" />
							</div>
							{
								elem.followed
									? <button onClick={() => { props.unfollow(elem.id) }}>unfollow</button>
									: <button onClick={() => { props.follow(elem.id) }}>follow</button>
							}
						</div>
						<div className="post__right">
							<div>{elem.name}</div>
						</div>
					</div>
				})

				}


			</div>
			<button onClick={() => { console.log(props) }} > PUSH</button>
		</div>
	)

}

export default Post;