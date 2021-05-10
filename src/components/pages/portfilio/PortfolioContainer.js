import React from 'react';
import { connect } from "react-redux";
import { portfolioFollowAC, portfolioUnfollowAC, setPortfolioCurrentPageAC, setPortfolioUsersAC, setPortfolioUsersCountAC } from "../../../redux/reducers/portfolio-reducer";
import Portfolio from "./Portfolio";
import * as axios from 'axios';

class PortfolioApiComponent extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then((response) => {
				console.log(response.data);
				this.props.setPortfolioUsers(response.data.items)
				this.props.setPortfolioUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setPortfolioUsers(response.data.items);
			})
	}

	render() {
		return (
			<>
				<Portfolio
					totalUsersCount={this.props.totalUsersCount}
					portfolioUsers={this.props.portfolioUsers}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					currentPage={this.props.currentPage}
					pageSize={this.props.pageSize}
					onPageChanged={this.onPageChanged}
				/>
			</>

		)
	}
}

let mapStateToProps = (state) => {
	return {
		portfolioUsers: state.portfolio.portfolioUsers,
		pageSize: state.portfolio.pageSize,
		totalUsersCount: state.portfolio.totalUsersCount,
		currentPage: state.portfolio.currentPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(portfolioFollowAC(userId));
		},
		unfollow: (userId) => {
			dispatch(portfolioUnfollowAC(userId));
		},
		setPortfolioUsers: (users) => {
			dispatch(setPortfolioUsersAC(users));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setPortfolioCurrentPageAC(pageNumber));
		},
		setPortfolioUsersCount: (portfolioUsersCount) => {
			dispatch(setPortfolioUsersCountAC(portfolioUsersCount));
		}
	}
}

const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(PortfolioApiComponent);

export default PortfolioContainer;