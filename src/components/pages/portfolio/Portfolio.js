import './Portfolio.css';

const Portfolio = (props) => {
	return (
		<div className="portfolio">
			<h2>Portfolio</h2>
			<div className="portfolio__inner">
				<div className="portfolio__item">
					<ul></ul>
				</div>
				<div className="portfolio__item">
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
				<div className="portfolio__item">
					<button>Push</button>
				</div>
			</div>
		</div>
	)
}
export default Portfolio;