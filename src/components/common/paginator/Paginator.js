import { useState } from 'react';
import './Paginator.css';

const Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.round(pagesCount / props.portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
	let rightPortionPageNumber = portionNumber * props.portionSize

	return (

		<div className="pagination">
			{portionNumber > 1 ? <button className="btnPrev" onClick={() => { setPortionNumber(portionNumber - 1) }} >prev</button> : null}

			{
				pages
					.filter(elem => {
						if (elem >= leftPortionPageNumber && elem <= rightPortionPageNumber) return elem;
					})
					.map((elem) => {
						return <span
							className={props.currentPage === elem ? 'selectet-page' : ''}
							onClick={(event) => { props.onPageChanged(elem) }}
							key={elem} >
							{elem}</span>
					})
			}

			<>
				{
					portionCount > portionNumber ? <button className="btnNext" onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button> : null
				}
			</>
		</div>
	)

}

export default Paginator;