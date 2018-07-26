import React, { Component } from 'react';
import { connect } from 'react-redux'
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import '../App.css';


class Table extends Component {
	render() {
		return (
			<table>
				<TableHeader />
				<TableRow />
			</table>
		)
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(Table);