import React from "react"
import {connect} from "react-redux"
import "../App.css"

const TableHeader = props => {
	const headers = Object.keys(Object.assign({}, ...props.store))
		return (
			<thead className="elegant-color-dark">
				<tr className="white-text text-center">
					<th scope="row">
						#
					</th>
					{headers.map(header => (
					<th key={header}
						scope="row">{header}</th>
					))}
					<th scope="row">
						Action
					</th>
				</tr>
			</thead>
		)
}

export default connect(
	state => ({
		store: state
	})
)(TableHeader)
