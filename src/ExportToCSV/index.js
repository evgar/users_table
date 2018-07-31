import React, { Component } from "react";
import { connect } from "react-redux";
import Papa from 'papaparse';
import "../App.css";

class ExportToCSV extends Component {
	render() {
		const toCSV =  Papa.unparse(this.props.store)
		console.log(this.toCSV);
		return <button className="export-btn btn light-blue lighten-2">
			<a href={`data:text/csv;charset=utf-8, ${toCSV}`}
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