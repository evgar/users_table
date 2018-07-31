import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Papa from 'papaparse';

class ExportToCSV extends Component {
	constructor(props) {
		super(props)

		this.toCSV = Papa.unparse(this.props.store)
	}

	render() {
		console.log(this.toCSV);
		return <button className="export-btn btn light-blue lighten-2">
			<a href={`data:text/csv;charset=utf-8, ${this.toCSV}`}
			   download="candidates.csv"
			   className="white-text"
			>
				Download CSV
			</a>
			</button>
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(ExportToCSV);