import React, { Component } from "react"
import { connect } from "react-redux"
import "../App.css"

class AppendingRow extends Component {
	render() {
		const unique = [...new Set(this.props.store) ]
		console.log(unique)


		return(
			<tr>
				<td>asd</td>
			</tr>
		)
	}
}

export default connect(
	state => ({
		store: state
	})
)(AppendingRow)