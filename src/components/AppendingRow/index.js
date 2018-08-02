import React, {Component, Fragment} from "react"
import {connect} from "react-redux"
import TableCell from "../TableCell"
import {addNewItem} from "../../store/actions"
import "../../App.css"

class AppendingRow extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {},
			isDataValid: true
		}
		this.updateItemData = this.updateItemData.bind(this)
		this.onAddNewItem = this.onAddNewItem.bind(this)

		this.collectiveKeys = [...new Set(this.props.store
			.reduce((items, item) => {
				return [...items, ...Object.keys(item)]
			}, Object.keys(this.props.store[0]))
		)]
	}

	componentWillMount() {
		this.setState({user: this.generateItemObj()})
	}

	generateItemObj() {
		let initialObj = {}
		this.collectiveKeys.map(value => {
			initialObj[value] = ""
			return initialObj
		})
		return initialObj
	}

	updateItemData(info) {
		const preparedInfo = {[info.title]: info.meaning}
		this.setState({user: {...this.state.user, ...preparedInfo}})
	}

	onAddNewItem() {
		if (this.validateData()) {
			this.props.addNewItem(this.state.user)
		}
		// this.setState({user: {}})
	}

	validateData() {
		const {user} = this.state
		const isDataValid = Object.values(user).every(item => item !== '')
		this.setState({isDataValid})
		return isDataValid
	}

	render() {
		return (
			<Fragment>
				<tr>
					<td></td>
					{this.collectiveKeys.map(prop => {
						const characteristic = {title: prop, meaning: ''}
						return (
							<TableCell
								key={prop}
								value={characteristic}
								editMode={true}
								onValueChange={this.updateItemData}
							/>
						)
					})}
					<td>
						<button
							onClick={this.onAddNewItem}
							className="btn btn-sm success-color-dark">
							ADD
						</button>
					</td>
				</tr>

				{!this.state.isDataValid &&
				<tr className="invalid-info">
					<td colSpan={this.props.store.length}>
						Fill in all the fields please
					</td>
				</tr>
				}
			</Fragment>
		)
	}
}

const mapDispatchToProps = {
	addNewItem
}

const mapStateToProps = (state) => (
	{store: state}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppendingRow)