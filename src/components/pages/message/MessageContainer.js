import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {
	getMessageUsersThunkCreator, setMessageUsers, followMessage,
	unfollowMessage, setMessageCurrentPage
} from '../../../redux/reducers/message-reducer';
import Message from "./Message";
import Preloader from '../../common/preloader/Preloader';
import { compose } from 'redux';


const MessageApiContainer = (props) => {

	useEffect(() => {
		props.getMessageUsersThunkCreator(props.currentPage, props.pageSize)
		return () => {
			console.log('componentWillUnmount()');
		}
	}, [])

	const onChangePage = (pageNumber) => {
		props.setMessageCurrentPage(pageNumber);
		props.getMessageUsersThunkCreator(pageNumber, props.pageSize)
	}

	return (
		<>

			{props.isFetching ? <Preloader /> : null}
			<Message
				messageUsers={props.messageUsers}
				currentPage={props.currentPage}
				pageSize={props.pageSize}
				followMessage={props.followMessage}
				unfollowMessage={props.unfollowMessage}
				totalMessageCount={props.totalMessageCount}
				onChangePage={onChangePage}
			/>
		</>
	)
}

let mapStateToProps = (state) => {
	return {
		messageUsers: state.messagePage.messageUsers,
		currentPage: state.messagePage.currentPage,
		pageSize: state.messagePage.pageSize,
		isFetching: state.messagePage.isFetching,
		totalMessageCount: state.messagePage.totalMessageCount,
	}
}

// const MessageContainer = connect(mapStateToProps, {
// 	getMessageUsersThunkCreator,
// 	setMessageUsers,
// 	followMessage,
// 	unfollowMessage,
// })(MessageApiContainer)

// export default MessageContainer;

export default compose(
	connect(mapStateToProps, {
		getMessageUsersThunkCreator,
		setMessageUsers,
		followMessage,
		unfollowMessage,
		setMessageCurrentPage,
	})
)(MessageApiContainer)