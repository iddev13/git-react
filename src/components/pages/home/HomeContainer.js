import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers, getUsers2 } from '../../../api/api';
import Home from './Home';
import {
	setHomeUsers, followHome, unfollowHome, setTotalHomeUsersCount,
	setHomeCurrentPage, toggleHomeIsFetching
} from '../../../redux/reducers/home-reducer';
import Preloader from '../../common/preloader/Preloader';

const HomeApiFunction = (props) => {

	// const [users, setUsers] = useState(props.homeUsers)

	useEffect(() => {

		props.toggleHomeIsFetching(true)
		getUsers(props.currentPage, props.pageSize).then(data => {
			props.setHomeUsers(data.items)
			props.setTotalHomeUsersCount(data.totalCount)
			props.toggleHomeIsFetching(false)
			console.log(data);
		})
		console.log('componentDidMount()');

		return () => {
			console.log('componentWillUnmount()');
		}

	}, [])

	const onChangePage = (pageNumber) => {

		props.toggleHomeIsFetching(true)
		props.setHomeCurrentPage(pageNumber)
		console.log(props);
		getUsers2(pageNumber, props.pageSize).then(data => {
			props.setHomeUsers(data.items);
			props.toggleHomeIsFetching(false)
		})

	}

	return (
		<div>
			{props.isFetching ? <Preloader /> : null}
			<Home
				homeUsers={props.homeUsers}
				setHomeUsers={props.setHomeUsers}
				followHome={props.followHome}
				unfollowHome={props.unfollowHome}
				currentPage={props.currentPage}
				pageSize={props.pageSize}
				totalHomeCount={props.totalHomeCount}
				isFetching={props.isFetching}
				onChangePage={onChangePage}
			/>
		</div>
	)
}

let mapStateToProps = (state) => {
	return {
		homeUsers: state.homePage.homeUsers,
		currentPage: state.homePage.currentPage,
		pageSize: state.homePage.pageSize,
		totalHomeCount: state.homePage.totalHomeCount,
		isFetching: state.homePage.isFetching,
	}
}

const HomeContainer = connect(mapStateToProps, {
	setHomeUsers,
	followHome,
	unfollowHome,
	setTotalHomeUsersCount,
	setHomeCurrentPage,
	toggleHomeIsFetching
})(HomeApiFunction);

export default HomeContainer;
