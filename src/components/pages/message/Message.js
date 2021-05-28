import './Message.css';
import messageUser from '../../../assets/images/user.png';

const Message = (props) => {

	let pagesCount = Math.ceil(props.totalMessageCount / props.pageSize)
	let pages = [];

	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className="message">
			<h2>Message</h2>
			<div className="message__nav">{
				pages.map((elem) => {
					return <span
						className={elem === props.currentPage ? 'message-selected-page' : ''}
						key={elem}
						onClick={() => { props.onChangePage(elem) }}
					>{elem}</span>
				})
			}</div>
			<div className="message__inner">
				{props.messageUsers.map((elem) => {
					return <div className="message__item item-message" key={elem.id}>
						<div className="item-message__left">
							<div className="message-photo">
								<img src={!elem.photos.small ? messageUser : elem.photos.small} alt="Avatar" />
							</div>
							<div>
								{!elem.followed
									? <button onClick={() => { props.followMessage(elem.id) }}>follow</button>
									: <button onClick={() => { props.unfollowMessage(elem.id) }}>unfollow</button>}
							</div>
						</div>
						<div className="item-message__right">
							<div className="message-info">
								<div className="message-user__name">{elem.name}</div>
								<div className="message-user__status">{!elem.status ? 'Some status...' : elem.status}</div>
							</div>
							<div className="message-info message-info--location">
								<div className="message-user__country">Country</div>
								<div className="message-user__city">City</div>
							</div>
						</div>
					</div>
				})}
			</div>
		</div>
	)
}

export default Message;