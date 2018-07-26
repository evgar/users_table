import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';

class TableRow extends Component {
	constructor() {
		super();

		this.state = {
			editMode: false,
		}
	}

	render() {
		return (
			<tbody>
				{this.props.store.map(user =>
					(<tr key={user.candidateName}>
						{Object.values(user).map(characteristic =>
							<td key={user.candidateName}>
								<input type="text" value={characteristic} />
							</td>
						)}
						<td>
							<button></button>
							<button></button>
						</td>
					</tr>)
				)}
			</tbody>
		)
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(TableRow);