import { connect } from "react-redux";
import { addDialog } from '../../../redux/reducers/dialog-reducer';
import Dialog from "./Dialog";

let mapStateToProps = (state) => {
	return {
		dialogPosts: state.dialogPage.dialogPosts
	}
}

const DialogContainer = connect(mapStateToProps, {
	addDialog
})(Dialog);

export default DialogContainer;