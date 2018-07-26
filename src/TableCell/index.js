import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'

class TableCell extends Component {
	constructor(props) {
		super(props)

		this.state = props.value

		this.changeValue = this.changeValue.bind(this)
	}

	changeValue(e) {
		const { value } = e.target
		this.setState({ meaning : value }, () => {
			this.props.onValueChange(this.state)
		})

	}

	render() {
		const { editMode } = this.props
		const { meaning } = this.state

		return (
			<td>
				<input
					type="text"
					value={ meaning }
					disabled={ !editMode }
					onChange={ this.changeValue }
				/>
			</td>
		)
	}
}

export default TableCell