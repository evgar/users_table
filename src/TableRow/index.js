import React, {Component} from 'react'
import {connect} from 'react-redux'
import TableCell from '../TableCell'
import '../App.css'

class TableRow extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editMode: false,
		}

		// this.changeEditMode = this.changeEditMode.bind(this)
		this.updateUserData = this.updateUserData.bind(this)

		this.user = this.props.user
	}

	changeEditMode() {
		this.setState(prevState => ({editMode: !prevState.editMode}))
	}

	editUser() {
		this.props.onEditUser(this.user, this.props.id)
	}

	updateUserData(info) {
		const preparedInfo = {[info.title] : info.meaning}
		this.user = {...this.user, ...preparedInfo}
		console.log(this.user);
	}

	render() {
		const {editMode} = this.state
		const {user, id} = this.props
		return (
			<tr key={user.candidateName + id}>
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
							<button key="cancel">Cancel</button>
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
		}
	})
)(TableRow)