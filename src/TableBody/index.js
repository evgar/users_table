import React from "react"
import {connect} from "react-redux"
import TableRow from "../TableRow"
import "../App.css"

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
		</tbody>
	)
}

export default connect(state => ({
	store: state
}))(TableBody)