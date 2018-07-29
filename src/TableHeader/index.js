import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class TableHeader extends Component {
	constructor(props) {
		super();

		this.headers = Object.keys(Object.assign({}, ...props.store));
	}

	render() {
		return (
			<thead>
			<tr>
				<th>#</th>
				{this.headers.map(header => (
					<th key={header}>{header}</th>
				))}
			</tr>
			</thead>
		);
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(TableHeader);
