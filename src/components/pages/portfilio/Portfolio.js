
import './Portfolio.css';
import portfolioUserPhoto from '../../../assets/images/user.png'

const Portfolio = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i);
	}

	const checkState = () => {
		console.log(props)
	}

	return (
		<div className="portfolio" >
			<div className="container">
				<div className="portfolio__inner">
					<div>
						<h2>Portfolio</h2>
					</div>
					<div className="portfolio-nav">
						{
							pages.map((elem) => {
								return <span className={props.currentPage === elem
									? 'selectet-page'
									: ''} onClick={(event) =>{props.onPageChanged(elem)}} key={elem}>{elem}</span>
							})
						}
					</div>
					<div className="portfolio__items">
						{
							props.portfolioUsers.map((elem) => {
								return <div className="portfolio__item" key={elem.id}>
									<div className="portfolio__item-left left-item">
										<div className="left-item__image">
											<img src={elem.photos.small === null
												? portfolioUserPhoto
												: elem.photos.small} alt="Avatar" />
										</div>
										{elem.followed
											? <button onClick={() => props.unfollow(elem.id)}>unfollow</button>
											: <button onClick={() => props.follow(elem.id)} >follow</button>}
									</div>
									<div className="portfolio__item-right right-item">
										<div className="right-item__elem">{elem.name}</div>
										<div className="right-item__elem">{elem.status = "user.status"}</div>
									</div>
								</div>
							})
						}
					</div>
				</div>
				<button onClick={checkState}>PUSH</button>
			</div>
		</div>
	)
}

export default Portfolio;