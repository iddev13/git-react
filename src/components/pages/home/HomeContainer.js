import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../api/api';
import Home from './Home';
import { setHomeUsers, followHome, unfollowHome } from '../../../redux/reducers/home-reducer';

const HomeApiFunction = (props) => {

	// const [users, setUsers] = useState(props.homeUsers)

	useEffect(() => {


		getUsers(props.currentPage, props.pageSize).then(data => {
			props.setHomeUsers(data.items)
			console.log(data);
		})
		console.log('componentDidMount()');

		return () => {
			console.log('componentWillUnmount()');
		}

	}, [])

	const onChangePage = (pageNumber) => {
		console.log(props);
	}

	return (
		<div>
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
})(HomeApiFunction);

export default HomeContainer;
