import React, { Component } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Papa from 'papaparse';
import "../App.css";

class ExportToCSV extends Component {
	render() {
		const toCSV =  Papa.unparse(this.props.store)
		return 	<Button style={{margin: '10px'}}>
					<a href={`data:text/csv;charset=utf-8, ${toCSV}`} download="candidates.csv">EXPORT TO CSV</a>
				</Button>
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(ExportToCSV);