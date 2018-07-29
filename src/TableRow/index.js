import React, {Component} from 'react'
import {connect} from 'react-redux'
import TableCell from '../TableCell'
import '../App.css'

class TableRow extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editMode: false,
			user: this.props.user
		}

		this.updateUserData = this.updateUserData.bind(this)
		this.cancelEdition = this.cancelEdition.bind(this)
	}

	changeEditMode() {
		this.setState(prevState => ({editMode: !prevState.editMode}))
	}

	editUser() {
		this.props.onEditUser(this.state.user, this.props.id)
	}

	updateUserData(info) {
		const preparedInfo = {[info.title] : info.meaning}
		this.setState({user: {...this.state.user, ...preparedInfo}})
	}

	cancelEdition() {
		const unchangedData = this.props.store[this.props.id]
		this.setState({user: unchangedData})
		this.changeEditMode()
	}

	render() {
		const {editMode, user} = this.state
		const {id} = this.props
		return (
			<tr key={this.props.store[id].candidateName}>
				{Object.entries(user)
					.map((user) => ({title : user[0], meaning : user[1]}))
					.map(characteristic => {
						return <TableCell
							key={characteristic.title}
							value={characteristic}
							editMode={editMode}
							onValueChange = {this.updateUserData}
						/>
					})}
				<td>
					{!editMode ?
						[
							<button key="edit" onClick={() => {this.changeEditMode()}}>Edit</button>,
							<button key="delete">Delete</button>
						]
						:
						[
							<button key="save" onClick={() => {this.changeEditMode(); this.editUser()}}>Save</button>,
							<button key="cancel" onClick={this.cancelEdition}>Cancel</button>
						]
					}
				</td>
			</tr>
		)
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({
		onEditUser: (user, id) => {
			dispatch({type: 'EDIT_USER',  user, id})
		},
		onCancelEdition: () => {
			dispatch({type: 'CANCEL_EDIT'})
		}
	})
)(TableRow)