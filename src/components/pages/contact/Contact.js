import { NavLink } from 'react-router-dom';
import contactUserPhoto from '../../../assets/images/user.png';
import './Contact.css';

const Contact = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = []

	for (let i = 1; i < pagesCount; i++) {
		pages.push(i);
	}

	const checkProps = () => {
		console.log(props)
	}

	return (
		<div className="contact">
			<h2>Contact</h2>
			<button onClick={checkProps}>Push</button>
			<div className="container">
				<div className="contact-nav">
					{pages.map(elem => {
						return <span className=
							{props.currentPage === elem
								? 'selected-contact-page'
								: ''}
							onClick={() => {
								props.onPageChanged(elem)
							}}
							key={elem}
						>{elem}</span>
					})}
				</div>
				<div className="contact__inner">

					{props.contactUsers.map((elem) => {
						return <div className="contact__item" key={elem.id}>
							<div className="contact__item-left contact-left">
								<div className="contact-left__photo">
									<NavLink to={'/profile/' + elem.id}>
										<img src={elem.photos.small ? elem.photos.small : contactUserPhoto} alt="Avatar" />
									</NavLink>
								</div>
								<div>
									{elem.followed
										? <button onClick={() => { props.contactUnfollow(elem.id) }}>unfollow</button>
										: <button onClick={() => { props.contactFollow(elem.id) }} >follow</button>
									}
								</div>
							</div>
							<div className="contact__item-left contact-right">
								<div className="contact-right__info">
									<div className="contact-name">{elem.name}</div>
									<div>{
										elem.status
											? elem.status
											: 'user status'
									}</div>
								</div>
								<div className="contact-right__info">
									<div>Country</div>
									<div>City</div>
								</div>
							</div>
						</div>
					})}

				</div>
			</div>

		</div>
	)
}

export default Contact;