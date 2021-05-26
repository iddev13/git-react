import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers, getUsers2 } from '../../../api/api';
import Home from './Home';
import {
	setHomeUsers, followHome, unfollowHome, setTotalHomeUsersCount,
	setHomeCurrentPage, toggleHomeIsFetching, getHomeUsersThunkCreator
} from '../../../redux/reducers/home-reducer';
import Preloader from '../../common/preloader/Preloader';

const HomeApiFunction = (props) => {

	// const [users, setUsers] = useState(props.homeUsers)

	useEffect(() => {
		props.getHomeUsersThunkCreator(props.currentPage, props.pageSize)
		console.log('componentDidMount()');

		return () => {
			console.log('componentWillUnmount()');
		}
	}, [])

	const onChangePage = (pageNumber) => {
		props.toggleHomeIsFetching(true)
		props.setHomeCurrentPage(pageNumber)
		props.getHomeUsersThunkCreator(pageNumber, props.pageSize)
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
	toggleHomeIsFetching,
	getHomeUsersThunkCreator,
})(HomeApiFunction);

export default HomeContainer;
