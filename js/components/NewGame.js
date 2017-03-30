import React from 'react';
import {connect} from 'react-redux';
import New_Number from '../actions/index'

export default function NewGame() {
	return (
		<div className="NewGameOption">
			<button type="submit" class="SubmitNewGame">New Game</button>
		</div>
		);
}
export default connect()(NewGame);