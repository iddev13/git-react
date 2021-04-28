
import '../contact/Contact.css';

const Portfolio = (props) => {

	let portfPost = props.portfolio.portfolioPosts.map((elem) => {
		return <li key={elem.id}>{elem.message}</li>
	})

	const onupdatePortfolio = (event) => {
		let value = event.target.value;
		props.updatePortfolio(value);
	}

	const onaddPortfolio = () => {
		props.addPortfolio();
	}

	return (
		<div className="contact">
			<h2>Portfolio</h2>
			<div className="contact__item-wrapper">
				<div className="contact__item">
					<ul>{portfPost}</ul>
				</div>
				<div className="contact__item">
					<textarea
						onChange={onupdatePortfolio}
						cols="30"
						rows="10"
						value={props.portfolio.newPortfolioText}
					/>
				</div>
				<div className="contact__item">
					<button onClick={onaddPortfolio}>Push</button>
				</div>
			</div>
		</div>
	)
}
export default Portfolio;