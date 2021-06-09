import React from 'react';

class ProfileStatusClass extends React.Component {

	state = {
		editMode: false
	}


	activateEditMode() {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode() {
		this.setState({
			editMode: false
		})
	}

	render() {
		return (
			<div>
				<h3>Profile Status</h3>
				<div>{!this.state.editMode
					? <div><span onDoubleClick={this.activateEditMode.bind(this)}>span span span span span</span></div>
					: <div><input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" placeholder="Some text..." /></div>
				}
				</div>
			</div >
		)
	}
}

export default ProfileStatusClass;