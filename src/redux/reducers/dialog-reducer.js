const DIALOG_ADD = 'DIALOG_ADD';

let initialState = {
	dialogPosts: [
		{ id: 1, message: 'aaa' },
		{ id: 2, message: 'sss' },
		{ id: 3, message: 'ddd' },
		{ id: 4, message: 'fff' },
	]
}

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case DIALOG_ADD:
			let newDialogPost = { id: state.dialogPosts.length + 1, message: action.newMessage }
			return {
				...state,
				dialogPosts: [...state.dialogPosts, newDialogPost]
			}
		default:
			return state;
	}
}

export const addDialog = (newMessage) => {
	return {
		type: DIALOG_ADD,
		newMessage
	}
}


export default dialogReducer;