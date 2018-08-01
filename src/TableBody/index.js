import React from "react"
import {connect} from "react-redux"
import TableRow from "../TableRow"
import "../App.css"
import AppendingRow from '../AppendingRow'

const TableBody = props => {
	return (
		<tbody>
		{props.store.map((user, i) => {
			return (
				<TableRow 	key={user.candidateName}
						 	user={user}
						 	id={i}
				/>
			)
		})}
		<AppendingRow/>
		</tbody>
	)
}

const mapStateToProps = (state) => (
	{ store: state }
)

export default connect(
	mapStateToProps
)(TableBody)