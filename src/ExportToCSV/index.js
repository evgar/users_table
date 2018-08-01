import React from "react"
import { connect } from "react-redux"
import Papa from 'papaparse'
import "../App.css"

const ExportToCSV = props => {
	const toCSV = Papa.unparse(props.store)
	return (
		<button className="export-btn btn light-blue lighten-2">
			<a href={`data:text/csv;charset=utf-8, ${toCSV}`}
			   download="export.csv"
			   className="white-text"
			>
				Download CSV
			</a>
		</button>
	)
}

export default connect(
	state => ({
		store: state
	})
)(ExportToCSV)