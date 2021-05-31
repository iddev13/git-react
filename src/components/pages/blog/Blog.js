import './Blog.css'
import blogPhoto from '../../../assets/images/user.png';

const Blog = (props) => {

	let pagesCount = Math.ceil(props.totalBlogCount / props.pageSize);
	let pages = []

	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className="blog">
			<h2>Blog</h2>
			<div className="blogNav">
				<button onClick={() => { console.log(props); }}>Push</button>
				{pages.map(elem => {
					return <span className={elem === props.currentPage ? 'selectedPage' : ''} onClick={() => { props.onChangePage(elem) }} key={elem}>{elem}</span>
				})}
			</div>
			<div className="blog__inner">
				{props.blogUsers.map(elem => {
					return <div className="blog__item" key={elem.id}>
						<div className="blog__itemLeft">
							<div className="blogPhoto">
								<img src={elem.photos.small ? elem.photos.small : blogPhoto} alt="Ava" />

							</div>
							{elem.followed
								? <button onClick={() => { props.blogUnfollow(elem.id) }}>unfollow</button>
								: <button onClick={() => { props.blogFollow(elem.id) }}>follow</button>}
						</div>
						<div className="blog__itemRight">
							<div className="blogInfo">
								<div className="blogName">{elem.name}</div>
								<div className="blogStatus">{elem.status ? elem.status : 'No status...'}</div>
							</div>
							<div className="blogInfo blogInfo--location">
								<div className="blogCounry">blogCounry</div>
								<div className="blogCity">blogCity</div>
							</div>
						</div>
					</div>
				})}
			</div>
		</div>
	)
}

export default Blog;