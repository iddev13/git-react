import './Post.css';
import postUserPhoto from '../../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import ProfileStatusContainer from '../../profile-status-class/ProfileStatusContainer';


const Post = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];

	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className="post">
			<div className="container">
				<h2>Post users</h2>
				<button onClick={() => console.log(props)}>PUSH</button>
				<ProfileStatusContainer />
				<div className="post-nav">
					{
						pages.map((elem) => {
							return <span className={props.currentPage === elem
								? 'selected-post-page'
								: ''} onClick={() => { props.onPostPageChange(elem) }} key={elem}>{elem}</span>
						})
					}
				</div>
				<div className="post__inner">
					{
						props.postUsers.map((elem) => {
							return <div className="post__item" key={elem.id}>
								<div className="post__left">
									<div className="post__photo" >
										<NavLink to={'/profile/' + elem.id}>
											<img src={!elem.photos.small ? postUserPhoto : elem.photos.small} alt="post User" />
										</NavLink>
									</div>
									{
										elem.followed
											? <button onClick={() => { props.unfollow(elem.id) }}>unfollow</button>
											: <button onClick={() => { props.follow(elem.id) }}>follow</button>
									}
								</div>
								<div className="post__right">
									<div >
										{elem.name}
									</div>
									<div>
										{elem.status}
									</div>
								</div>
							</div>
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Post;