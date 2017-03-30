import React from 'react';
import {connect} from 'react-redux';
import Guess_Number from '../actions/index'


export default function Guess() {
	return (
		<div className="GuessInputAndButton">
			<div className="GuessInput">
				<label for="input_entry">Guess Number</label>
			<input type="text" name="input_entry" id="input_entry">
			<button type="submit" class="submit">Submit</button>
		</form>

        </div>
	);
}

export default connect()(Guess);