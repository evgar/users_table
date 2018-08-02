import React from "react"
import TableRow from "../TableRow"
import "../../App.css"
import AppendingRow from '../AppendingRow'

const TableBody = ({ data }) => {
	return (
		<tbody>
		{data.map((user, i) => {
			return (
				<TableRow
					key={user.candidateName}
				  user={user}
				  id={i}
				/>
			)
		})}
		<AppendingRow/>
		</tbody>
	)
}

export default TableBody;
