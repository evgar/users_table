import React, {Component} from "react";
import {connect} from "react-redux";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import "../App.css";

const styles = {
	headerCell: {
		textAlign: 'center',
		backgroundColor: 'black',
		color: 'white'
	}
}

class TableHeader extends Component {
	constructor(props) {
		super();

		this.headers = Object.keys(Object.assign({}, ...props.store));
	}

	render() {
		// return (
		// 	<thead>
		// 	<tr>
		// 		<th>#</th>
		// 		{this.headers.map(header => (
		// 			<th key={header}>{header}</th>
		// 		))}
		// 	</tr>
		// 	</thead>
		// );
		return (
			<TableHead>
				<TableRow>
					<TableCell style={styles.headerCell}>#</TableCell>
					{this.headers.map(header => (
						<TableCell key={header} style={styles.headerCell}>
							{header}
						</TableCell>
					))}
					<TableCell style={styles.headerCell}>Action</TableCell>
				</TableRow>
			</TableHead>
		)
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(TableHeader);
