import React, {Component} from "react";
import {connect} from "react-redux";
import "../App.css";

class TableHeader extends Component {
	constructor(props) {
		super();

		this.headers = Object.keys(Object.assign({}, ...props.store));
	}

	render() {
		return (
			<thead className="elegant-color-dark">
				<tr className="white-text text-center">
					<th scope="row">#</th>
					{this.headers.map(header => (
						<th key={header} scope="row">{header}</th>
					))}
					<th scope="row">Action</th>
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
