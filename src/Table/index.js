import React, { Component } from "react";
import { connect } from "react-redux";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import "../App.css";

class Table extends Component {
	render() {
		return (
			<table className="table table-striped table-hover">
				<TableHeader />
				<tbody>
					{this.props.store.map((user, i) => {
						return <TableRow key={user.candidateName} user={user} id={i} />;
					})}
				</tbody>
			</table>
		);
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(Table);