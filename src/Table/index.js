import React, { Component } from "react";
import { connect } from "react-redux";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import MaterialTable from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody';
import "../App.css";

class Table extends Component {
	render() {
		return (
			<MaterialTable>
				<TableHeader/>
				<TableBody>
					{this.props.store.map((user, i) => {
						return <TableRow key={user.candidateName} user={user} id={i}/>;
					})}
				</TableBody>
			</MaterialTable>
		);
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(Table);