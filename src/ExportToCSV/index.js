import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Papa from 'papaparse';

class ExportToCSV extends Component {
	render() {
		const toCSV =  Papa.unparse(this.props.store)
		return <button>
			<a href={`data:text/csv;charset=utf-8, ${toCSV}`} download="candidates.csv">Download CSV</a>
			</button>
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(ExportToCSV);