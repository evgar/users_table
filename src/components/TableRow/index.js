import React, { Component } from "react"
import { connect } from "react-redux"
import TableCell from "../TableCell"
import { editItem, deleteItem } from "../../store/actions/index"
import "../../App.css"

class TableRow extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editMode: false,
			user: this.props.user
		}

		this.updateUserData = this.updateUserData.bind(this)
		this.cancelEdition = this.cancelEdition.bind(this)
		this.onDeleteItem = this.onDeleteItem.bind(this)
	}

	changeEditMode() {
		this.setState(prevState => ({editMode: !prevState.editMode}))
	}

	onEditItem() {
		this.props.editItem(this.state.user, this.props.id)
	}

	onDeleteItem() {
		this.props.deleteItem(this.props.id)
	}

	updateUserData(info) {
		const preparedInfo = {[info.title]: info.meaning}
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
				<td className="text-center">{this.props.id + 1}</td>

				{Object.entries(user)
					.map(user => {
						const characteristic = {title: user[0], meaning: user[1]}
						return (
							<TableCell
								key={characteristic.title}
								value={characteristic}
								editMode={editMode}
								onValueChange={this.updateUserData}
							/>
						)
					})}

				<td className="text-center">
					{!editMode ?
						[
							<button key="edit"
									className="btn btn-sm primary-color"
									onClick={() => {
										this.changeEditMode()
										}
									}
							>
								Edit
							</button>,
							<button key="delete"
									className="btn btn-sm danger-color"
									onClick={this.onDeleteItem}
							>
								Delete
							</button>
						]
						:
						[
							<button key="save"
									onClick={() => {
										this.changeEditMode()
										this.onEditItem()
										}
									}
									className="btn btn-sm primary-color"
							>
								Save
							</button>,
							<button key="cancel"
									onClick={this.cancelEdition}
									className="btn btn-sm danger-color">
								Cancel
							</button>
						]}
				</td>
			</tr>
		)
	}
}

const mapStateToProps = (state) => (
	{ store: state }
)

const mapDispatchToProps = {
	editItem,
	deleteItem,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TableRow)
