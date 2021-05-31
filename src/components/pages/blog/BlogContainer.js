import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
	setBlogUsers, getBlogUsersThunkCreator, blogFollow,
	blogUnfollow, toggleBlogIsFetching, setBlogCurrentPage
} from '../../../redux/reducers/blog-reducer';
import Preloader from "../../common/preloader/Preloader";
import Blog from "./Blog"

const BlogApiContainer = (props) => {

	useEffect(() => {
		props.getBlogUsersThunkCreator(props.currentPage, props.pageSize)
	}, [])

	const onChangePage = (pageNumber) => {
		props.toggleBlogIsFetching(true)
		props.setBlogCurrentPage(pageNumber)
		props.getBlogUsersThunkCreator(pageNumber, props.pageSize)
	}

	return (

		<div>
			{props.isFetching ? <Preloader /> : null}
			< Blog
				blogUsers={props.blogUsers}
				currentPage={props.currentPage}
				pageSize={props.pageSize}
				totalBlogCount={props.totalBlogCount}
				blogFollow={props.blogFollow}
				blogUnfollow={props.blogUnfollow}
				onChangePage={onChangePage}
			/>
		</div>
	)
}

let mapStateToProps = (state) => {
	return {
		blogUsers: state.blogPage.blogUsers,
		currentPage: state.blogPage.currentPage,
		pageSize: state.blogPage.pageSize,
		totalBlogCount: state.blogPage.totalBlogCount,
		isFetching: state.blogPage.isFetching,
	}
}

export default compose(
	connect(mapStateToProps, {
		setBlogCurrentPage,
		toggleBlogIsFetching,
		blogFollow,
		blogUnfollow,
		setBlogUsers,
		getBlogUsersThunkCreator
	}),
)(BlogApiContainer);