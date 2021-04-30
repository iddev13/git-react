const ADD_CONTACT = 'ADD-CONTACT';
const UPDATE_CONTACT = 'UPDATE-CONTACT';

let initialState = {
	contacts: [
		{ message: 'message1' },
		{ message: 'message2' },
		{ message: 'message3' },
		{ message: 'message4' },
		{ message: 'message5' },
	],
	newContactText: ''
}

const contactReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CONTACT: {
			return {
				...state,
				newContactText: action.body
			};
		}
		case ADD_CONTACT: {
			let newText = {
				message: state.newContactText
			};
			return {
				...state,
				newContactText: '',
				contacts: [...state.contacts, newText]
			};
		}
		default:
			return state;
	}
}

export const updateContactMessageCreator = (value) => {
	return {
		type: UPDATE_CONTACT,
		body: value
	}
}
export const addContactMessageCreator = () => {
	return {
		type: ADD_CONTACT
	}
}

export default contactReducer;