import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';

class TableRow extends Component {
	constructor() {
		super()

	}

	render() {
		console.log(this.props);
		return (
			<tbody>

				{this.props.store.map(user =>
					(<tr key={user.candidateName}>
						{Object.values(user).map(characteristic => <td>{characteristic}</td>)}
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