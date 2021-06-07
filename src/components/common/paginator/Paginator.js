import './Paginator.css';

const Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<>
			{
				pages.map((elem) => {
					return <span className={props.currentPage === elem ? 'selectet-page' : ''} onClick={(event) => { props.onPageChanged(elem) }} key={elem}>{elem}</span>
				})
			}

		</>
	)

}

export default Paginator;