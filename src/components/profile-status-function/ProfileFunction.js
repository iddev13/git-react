import React, { useState } from 'react';

const ProfileStatusFunction = () => {

	const [toggleMode, settoggleMode] = useState(false)

	const activateToggleMode = () => {
		settoggleMode(true);
	}

	const deactivateToggleMode = () => {
		settoggleMode(false);
	}

	return (
		<div>
			<h3>Profile Status Function</h3>
			{
				!toggleMode
					? <div><span onDoubleClick={activateToggleMode}>go go go go</span></div>
					: <div><input autoFocus={true} onBlur={deactivateToggleMode} type="text" placeholder="Some text..." /></div>
			}
		</div>
	)
}

export default ProfileStatusFunction;