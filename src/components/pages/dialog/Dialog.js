import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { InputDialog } from '../../common/form-controls/FormControls';
import './Dialog.css';

let maxSymbolLength = maxLengthCreator(5);

// class DialogForm extends React.PureComponent {

// 	// shouldComponentUpdate(nextProps, nextState) {
// 	// 	return nextProps != this.props || nextState != this.state;
// 	// }

// 	render() {
// 		console.log('RENDER')
// 		return (
// 			<form form onSubmit={this.props.handleSubmit} >
// 				<div className="dialog__item">
// 					<Field
// 						name="newDialogPost"
// 						type="text"
// 						component={InputDialog}
// 						placeholder="Some text..."
// 						validate={[required, maxSymbolLength]}
// 					/>
// 				</div>
// 				<div className="dialog__item">
// 					<button>Dialog Btn</button>
// 				</div>
// 			</form >
// 		)
// 	}
// }

const DialogForm = React.memo((props) => {
	console.log('RENDER')
	return (
		<form onSubmit={props.handleSubmit} >
			<div className="dialog__item">
				<Field
					name="newDialogPost"
					type="text"
					component={InputDialog}
					placeholder="Some text..."
					validate={[required, maxSymbolLength]}
				/>
			</div>
			<div className="dialog__item">
				<button>Dialog Btn</button>
			</div>
		</form >
	)
});

const DialogReduxForm = reduxForm({ form: 'dialogForm' })(DialogForm);

const Dialog = (props) => {

	const onAddText = (value) => {
		props.addDialog(value.newDialogPost);
		console.log(value.newDialogPost);
	}

	return (
		<div className="dialog">
			<h2>dialog</h2>
			<button onClick={() => { console.log(props); }}>PUSH</button>
			<ul className="dialog__list">
				{props.dialogPosts.map(elem => {
					return <li key={elem.id}>{elem.message}</li>
				})}
			</ul>
			<div className="dialogForm">
				<DialogReduxForm {...props} onSubmit={onAddText} />
			</div>
		</div>
	)
}

export default Dialog;