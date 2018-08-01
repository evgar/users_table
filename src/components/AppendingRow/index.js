import React, { Component } from "react"
import { connect } from "react-redux"
import TableCell from "../TableCell"
import "../../App.css"

class AppendingRow extends Component {
	constructor() {
		super()
		this.state = {}
		this.updateUserData = this.updateUserData.bind(this)
	}

	render() {
		const collectiveKeys = [...new Set(this.props.store.reduce((items, item) =>
			[...Object.keys(item), ...Object.keys(item)]
		))]

		return(
			<tr>
				<td></td>
				{collectiveKeys.map(prop => {
					const characteristic = {title: prop, meaning: ''}
					return (
						<TableCell
							key={prop}
							value={characteristic}
							editMode={true}
							onValueChange={this.updateUserData}
						/>
					)
				})}
			</tr>
		)
	}

	updateUserData (info) {
		console.log(info);
		const preparedInfo = {[info.title]: info.meaning}
		this.setState({user: {...this.state.user, ...preparedInfo}}, ()=> {
			return console.log(this.state)
		})
	}
}

export default connect(
	state => ({
		store: state
	})
)(AppendingRow)